const fs = require('fs');
const axios = require('axios');

/**
 * Recursively converts a swagger type description into a typescript type, i.e., a model for our mustache
 * template.
 *
 * Not all type are currently supported, but they should be straightforward to add.
 *
 * @param swaggerType a swagger type definition, i.e., the right hand side of a swagger type definition.
 * @param swagger
 * @returns a recursive structure representing the type, which can be used as a template model.
 */
function convertType(swaggerType, swagger) {
    const typespec = {description: swaggerType.description, isEnum: false, isNullable: !swaggerType.required};

    if (swaggerType.hasOwnProperty('schema')) {
        return convertType(swaggerType.schema);
    } else if (typeof swaggerType.$ref === 'string') {
        typespec.tsType = 'ref';
        typespec.target = swaggerType.$ref.substring(swaggerType.$ref.lastIndexOf('/') + 1);
    } else if (swaggerType.hasOwnProperty('enum')) {
        typespec.tsType = swaggerType.enum.map(function (str) {
            return JSON.stringify(str);
        }).join(' | ');
        typespec.isAtomic = true;
        typespec.isEnum = true;
    } else if (swaggerType.type === 'string') {
        typespec.tsType = 'string';
    } else if (swaggerType.type === 'number' || swaggerType.type === 'integer') {
        typespec.tsType = 'number';
    } else if (swaggerType.type === 'boolean') {
        typespec.tsType = 'boolean';
    } else if (swaggerType.type === 'array') {
        typespec.elementType = convertType(swaggerType.items);
        typespec.tsType = `Array<${typespec.elementType.target || typespec.elementType.tsType || 'any'}>`;
    } else /*if (swaggerType.type === 'object')*/ { //remaining types are created as objects
        if (swaggerType.minItems >= 0 && swaggerType.hasOwnProperty('title') && !swaggerType.$ref) {
            typespec.tsType = 'any';
        }
        else {
            typespec.tsType = 'object';
            typespec.properties = [];
            if (swaggerType.allOf) {
                swaggerType.allOf(function (ref) {
                    if (ref.$ref) {
                        let refSegments = ref.$ref.split('/');
                        let name = refSegments[refSegments.length - 1];
                        swagger.definitions.forEach(function (definition, definitionName) {
                            if (definitionName === name) {
                                const property = convertType(definition, swagger);
                                typespec.properties.push(...property.properties);
                            }
                        });
                    } else {
                        const property = convertType(ref);
                        typespec.properties.push(...property.properties);
                    }
                });
            }

            Object.keys(swaggerType.properties || {}).forEach(function (propertyName) {
                const propertyType = swaggerType.properties[propertyName];
                const property = convertType(propertyType);
                property.name = propertyName;
                typespec.properties.push(property);
            });
        }
    }

    // Since Mustache does not provide equality checks, we need to do the case distinction via explicit booleans
    typespec.isRef = typespec.tsType === 'ref';
    typespec.isObject = typespec.tsType === 'object';
    typespec.isArray = typespec.tsType.indexOf("Array<") > -1;
    typespec.isAtomic = typespec.isAtomic || ['string', 'number', 'boolean', 'any'].includes(typespec.tsType);

    return typespec;

}

function tsType2string(tsType) {
    if (tsType.isRef) {
        return tsType.target;
    } else if (tsType.isAtomic) {
        return tsType.tsType;
    } else if (tsType.isObject) {
        if (tsType.properties.length) {
            return tsType.properties.map((prop) => {
                const {isNullable} = prop;
                return `
  /**
   * ${prop.description}
   */
  ${prop.name}${isNullable ? '?' : ''}: ${tsType2string(prop)};`;
            }).join('');
        } else {
            return tsType.tsType;
        }
    } else if (tsType.isArray) {
        return `${tsType2string(tsType.elementType)}[]`;
    } else if (tsType.isEnum) {
        return tsType;
    }
    return '';
}

async function fetchSwagger(swaggerUrl) {
    const res = await axios.get(swaggerUrl);
    return res.data;
}

async function gen(swaggerUrl, output = 'swagger.d.ts') {
    const swagger = await fetchSwagger(swaggerUrl);
    const definitions = [];
    Object.keys(swagger.definitions).forEach((name) => {
        const definition = swagger.definitions[name];
        definitions.push({
            name: name,
            tsType: convertType(definition, swagger)
        });
    });

    const code = definitions.map((def) => {
        const {name, tsType} = def;
        return `
export interface ${name} {${tsType2string(tsType)}
}`;
    }).join('\n');

    fs.writeFileSync(output, code);
}

module.exports = gen;