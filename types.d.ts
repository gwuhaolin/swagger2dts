
export interface AddCustomBillVO{
  
  /**
   * 出入库单据信息
   */
  customBill?: CustomBillInnerVO;
  /**
   * 出入库单据条目信息
   */
  customBillItems?: CustomBillItemInnerVO[];
}

export interface AddGoodsVO{
  
  /**
   * 商品信息
   */
  goods?: GoodsVO;
  /**
   * 标品信息
   */
  standardProduct?: StandardProductVO;
}

export interface CheckGoodsDetailVO{
  
  /**
   * 行号
   */
  lineNum?: number;
  /**
   * 商品条形码
   */
  barcode?: CheckGoodsItemVO;
  /**
   * 商品名称
   */
  name?: CheckGoodsItemVO;
  /**
   * 商品分类
   */
  category?: CheckGoodsItemVO;
  /**
   * 商品售价
   */
  sellingPrice?: CheckGoodsItemVO;
  /**
   * 商品进价
   */
  costPrice?: CheckGoodsItemVO;
  /**
   * 商品库存
   */
  stock?: CheckGoodsItemVO;
}

export interface CheckGoodsItemVO{
  
  /**
   * 属性值
   */
  value?: object;
  /**
   * 处理结果
   */
  resultType?: number;
  /**
   * 处理结果描述
   */
  msg?: string;
}

export interface CustomBillInnerVO{
  
  /**
   * 单据ID
   */
  id?: number;
  /**
   * 业务出入库类别,1:自定义入库,2:自定义出库
   */
  billType?: number;
  /**
   * 总数量
   */
  totalQuantity?: string;
  /**
   * 总金额
   */
  totalAmount?: string;
  /**
   * 状态, 1:编辑中(未提交); 100:已完成
   */
  status?: number;
  /**
   * 原因,入库原因,1:生产退料,2:退还入库,3:其它入库;出库原因,4:生产领料,5:借用出库,6:其它出库
   */
  reasonId?: number;
  /**
   * 原因,入库原因,1:生产退料,2:退还入库,3:其它入库;出库原因,4:生产领料,5:借用出库,6:其它出库
   */
  reason?: string;
}

export interface CustomBillItemInnerVO{
  
  /**
   * 商品ID
   */
  skuId?: number;
  /**
   * 商品名称
   */
  skuName?: string;
  /**
   * 出入库数量
   */
  skuQuantity?: string;
  /**
   * 商品单价,单位分
   */
  skuPrice?: number;
  /**
   * 总金额，单位分
   */
  totalAmount?: string;
}

export interface CustomBillItemResult{
  
  /**
   * 出入库单据信息
   */
  customBill?: CustomBillVO;
  /**
   * 出入库单据条目信息
   */
  customBillItems?: CustomBillItemVO[];
}

export interface CustomBillItemVO{
  
  /**
   * 商品ID
   */
  skuId?: number;
  /**
   * 商品名称
   */
  skuName?: string;
  /**
   * 出入库数量
   */
  skuQuantity?: string;
  /**
   * 商品单价
   */
  skuPrice?: number;
  /**
   * 总金额
   */
  totalAmount?: string;
}

export interface CustomBillResult{
  
  /**
   * 出入库单据list
   */
  customBills?: CustomBillVO[];
}

export interface CustomBillVO{
  
  /**
   * 单据ID
   */
  id?: number;
  /**
   * 仓库ID
   */
  warehouseId?: number;
  /**
   * 单据号
   */
  billNo?: string;
  /**
   * 总数量
   */
  totalQuantity?: string;
  /**
   * 总金额
   */
  totalAmount?: string;
  /**
   * 编辑人
   */
  modifier?: string;
  /**
   * 更新时间
   */
  modifyTime?: number;
  /**
   * 状态,0:全部; 1:编辑中(未提交); 100:已完成
   */
  status?: number;
  /**
   * 原因,入库原因,1:生产退料,2:退还入库,3:其它入库;出库原因,4:生产领料,5:借用出库,6:其它出库
   */
  reasonId?: number;
  /**
   * 原因,入库原因,1:生产退料,2:退还入库,3:其它入库;出库原因,4:生产领料,5:借用出库,6:其它出库
   */
  reason?: string;
}

export interface GoodsCategoryVO{
  
  /**
   * 分类ID
   */
  categoryId?: number;
  /**
   * 分类父级ID
   */
  parentCategoryId?: number;
  /**
   * 分类名称
   */
  categoryName?: string;
}

export interface GoodsResultVO{
  
  /**
   * 分类ID
   */
  categoryId?: number;
  /**
   * 条码
   */
  barcode?: string;
  /**
   * 商品sku id
   */
  id?: number;
  /**
   * sku名称
   */
  name?: string;
  /**
   * 拼音首字母
   */
  pinyinInitials?: string;
  /**
   * 规格
   */
  specification?: string;
  /**
   * 进价
   */
  costPrice?: number;
  /**
   * 卖价
   */
  sellingPrice?: number;
  /**
   * 创建时间
   */
  createdTime?: number;
  /**
   * 最后更新时间
   */
  lastModifiedTime?: number;
  /**
   * 库存
   */
  stock?: number;
  /**
   * 是否已删除
   */
  deleted?: number;
  /**
   * 单位Id
   */
  unitId?: number;
  /**
   * 单位名称
   */
  unitName?: string;
}

export interface GoodsVO{
  
  /**
   * 分类ID
   */
  categoryId?: number;
  /**
   * 条码
   */
  barcode?: string;
  /**
   * sku名称
   */
  name?: string;
  /**
   * 规格
   */
  specification?: string;
  /**
   * 进价
   */
  costPrice?: number;
  /**
   * 卖价
   */
  sellingPrice?: number;
  /**
   * 库存
   */
  stock?: number;
  /**
   * 单位
   */
  unitId?: number;
}

export interface InputStream{
  object
}

export interface ModifyGoodsVO{
  
  /**
   * 商品sku id
   */
  id?: number;
  /**
   * 分类ID
   */
  categoryId?: number;
  /**
   * sku名称
   */
  name?: string;
  /**
   * 规格
   */
  specification?: string;
  /**
   * 进价
   */
  costPrice?: number;
  /**
   * 卖价
   */
  sellingPrice?: number;
  /**
   * 库存
   */
  stock?: number;
  /**
   * 单位
   */
  unitId?: number;
  /**
   * 失败的系统标识.1:库存
   */
  failedSystemList?: number[];
}

export interface MultipartFile{
  
  /**
   * undefined
   */
  contentType?: string;
  /**
   * undefined
   */
  originalFilename?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * undefined
   */
  empty?: boolean;
  /**
   * undefined
   */
  bytes?: string[];
  /**
   * undefined
   */
  size?: number;
  /**
   * undefined
   */
  inputStream?: InputStream;
}

export interface PageVO{
  
  /**
   * 第n页
   */
  pageNo?: number;
  /**
   * 页多少条数据,最大50.
   */
  pageSize?: number;
  /**
   * 总的数据条数
   */
  totalCount?: number;
  /**
   * 总的页数
   */
  totalPageCount?: number;
}

export interface PurcahseReportResult{
  
  /**
   * 进货报表的列表
   */
  itemList?: PurchaseReportItem[];
}

export interface PurchaseReportItem{
  
  /**
   * 商品名
   */
  skuName?: string;
  /**
   * 类别
   */
  categoryName?: string;
  /**
   * 进货数, 可能是小数
   */
  purchaseCount?: string;
  /**
   * 退货数, 可能是小数
   */
  refundCount?: string;
  /**
   * 结算，进货金额与退货金额的加和
   */
  totalAmount?: string;
}

export interface PurchaseSummaryResult{
  
  /**
   * 进货总金额
   */
  purchaseAmount?: string;
  /**
   * 退货总金额
   */
  refundAmount?: string;
  /**
   * 结算，进货总金额与退货总金额的加和
   */
  totalAmount?: string;
}

export interface QueryCustomBillVO{
  
  /**
   * 单据号,支持模糊查询
   */
  billNo?: string;
  /**
   * 业务出入库类别,1:自定义入库,2:自定义出库
   */
  billType?: number;
  /**
   * 开始时间,单位毫秒
   */
  startTime?: number;
  /**
   * 结束时间,单位毫秒
   */
  endTime?: number;
  /**
   * 当前页最后一张单据的id
   */
  lastId?: number;
  /**
   * 当前页最后一张单据的更新日期
   */
  lastUpdateDate?: number;
  /**
   * 查询条数限制
   */
  limit?: number;
  /**
   * 状态,0:全部; 1:编辑中(未提交); 100:已完成
   */
  status?: number;
  /**
   * 原因ID,入库原因,1:生产退料,2:退还入库,3:其它入库;出库原因,4:生产领料,5:借用出库,6:其它出库
   */
  reasonId?: number;
  /**
   * 原因名称,入库原因,1:生产退料,2:退还入库,3:其它入库;出库原因,4:生产领料,5:借用出库,6:其它出库
   */
  reason?: string;
}

export interface QueryPurchaseDetailReportVO{
  
  /**
   * 开始时间，单位毫秒
   */
  startTime?: number;
  /**
   * 结束时间，单位毫秒
   */
  endTime?: number;
  /**
   * 供应商id列表，字符串，id用逗号分隔
   */
  supplierIds?: string;
  /**
   * 单据类型，1.进货，2.退货，用逗号隔开的字符串，不传默认查所有
   */
  billTypes?: string;
  /**
   * 页数，不传默认0
   */
  pageNo?: number;
  /**
   * 单页数量, 不传默认20
   */
  pageSize?: number;
}

export interface QueryPurchaseSummaryVO{
  
  /**
   * 开始时间，单位毫秒
   */
  startTime?: number;
  /**
   * 结束时间，单位毫秒
   */
  endTime?: number;
  /**
   * 供应商id列表，字符串，id用逗号分隔
   */
  supplierIds?: string;
  /**
   * 单据类型，1.进货，2.退货，用逗号隔开的字符串，不传默认查所有
   */
  billTypes?: string;
}

export interface QueryRefundBillResult{
  
  /**
   * 主键
   */
  id?: number;
}

export interface QueryRefundBillsResult{
  
  /**
   * 退货单列表
   */
  refundBills?: RefundBillResultVO[];
}

export interface RefundBillResultVO{
  
  /**
   * 退货单总金额
   */
  totalAmount?: string;
  /**
   * 供货商
   */
  supplie?: string;
  /**
   * 状态
   */
  status?: number;
  /**
   * 退货单号
   */
  billNo?: string;
  /**
   * 编辑人
   */
  modifier?: string;
  /**
   * 编辑时间
   */
  modifyTime?: number;
}

export interface RestResponse{
  
  /**
   * undefined
   */
  data?: object;
  /**
   * undefined
   */
  code?: number;
}

export interface StandardProductVO{
  
  /**
   * 标品ID
   */
  id?: number;
  /**
   * ean条码
   */
  eanCode?: string;
  /**
   * 标品名称
   */
  productName?: string;
  /**
   * undefined
   */
  empty?: boolean;
}

export interface UnbindTokenVO{
  
  /**
   * Shark的token
   */
  token?: string;
  /**
   * 对应于绑定时返回的deviceId
   */
  deviceId?: number;
  /**
   * 应用版本(不用传，会从Header中获取
   */
  version?: string;
}

export interface 分页查询请求参数{
  
  /**
   * 名字
   */
  name?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 账号id
   */
  bizAccIds?: number[];
  /**
   * 页码
   */
  page?: PageVO;
}

export interface 员工信息{
  
  /**
   * 员工id
   */
  id?: number;
  /**
   * 员工关联的账号id,epassport中的id
   */
  bizAcctId?: number;
  /**
   * 员工关联的登录,epassport中的账号
   */
  bizAcctLogin?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 性别 —— 1:男; 2:女; 3:未设置
   */
  gender?: number;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 账户头像
   */
  avatar?: string;
  /**
   * 操作人id
   */
  operator?: number;
  /**
   * 操作人姓名
   */
  operatorName?: string;
  /**
   * 最后操作时间
   */
  operatorTime?: number;
  /**
   * 是否禁用
   */
  status?: number;
}

export interface 员工分页信息{
  
  /**
   * 员工信息列表
   */
  staffVOList?: 员工信息[];
  /**
   * 页码信息
   */
  page?: PageVO;
}

export interface 员工变更请求参数{
  
  /**
   * 员工id
   */
  id?: number;
  /**
   * 员工关联的登录,epassport中的账号
   */
  bizAcctLogin?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 确认密码
   */
  confirmPassword?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 性别 —— 1:男; 2:女; 3:未设置
   */
  gender?: number;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 账户头像
   */
  avatar?: string;
  /**
   * 是否发送短信
   */
  sendMessage?: boolean;
}

export interface 图片Token结果类型{
  
  /**
   * clientId
   */
  clientId?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 外网上传地址
   */
  url?: string;
  /**
   * token过期时间
   */
  expireTime?: number;
}

export interface 增加goods返回值{
  
  /**
   * 处理结果,0：已执行导入，1：未执行导入，有错误数据，请修改后重新上传 2:存在条码为空
   */
  resultType?: number;
  /**
   * 处理成功个数
   */
  successCount?: number;
  /**
   * 处理错误个数
   */
  errorCount?: number;
  /**
   * 总商品数
   */
  totalCount?: number;
  /**
   * 校验结果
   */
  goodsList?: CheckGoodsDetailVO[];
}

export interface 更新sku返回值{
  
  /**
   * sku信息
   */
  goods?: GoodsResultVO;
}

export interface 权限信息{
  
  /**
   * 权限Code
   */
  operation?: string;
  /**
   * 权限装饰类型
   */
  decorateType?: number;
  /**
   * 权限装饰内容
   */
  decorateValue?: string;
  /**
   * 平台
   */
  platform?: number;
}

export interface 查询历史退货单参数{
  
  /**
   * 开始日期
   */
  startDate?: number;
  /**
   * 结束日期
   */
  endDate?: number;
  /**
   * 货单状态：
   */
  status?: number;
  /**
   * 供货商id
   */
  supplierId?: number;
  /**
   * 当前页最后一张退货单的更新日期
   */
  lastUpdateDate?: number;
  /**
   * 每页的单据数
   */
  limit?: number;
}

export interface 根据barcode查询商品及标品返回值{
  
  /**
   * 商品信息(不提供库存)
   */
  goods?: GoodsResultVO;
  /**
   * 标品信息
   */
  standardProduct?: StandardProductVO;
}

export interface 生成条形码返回值{
  
  /**
   * 条形码信息
   */
  barcode?: string;
}

export interface 绑定Token信息{
  
  /**
   * Shark Push的token
   */
  token?: string;
  /**
   * 设备uuid(不用传，会从Header中获取
   */
  deviceUuid?: string;
  /**
   * 操作系统类型(不用传，会从Header中获取
   */
  osType?: number;
  /**
   * 操作系统名称(不用传，会从Header中获取
   */
  os?: string;
  /**
   * 型号(不用传，会从Header中获取
   */
  model?: string;
  /**
   * 渠道(不用传，会从Header中获取
   */
  channel?: string;
  /**
   * 应用版本(不用传，会从Header中获取
   */
  version?: string;
}

export interface 绑定二维码入参{
  
  /**
   * 二维码UUID
   */
  uuid?: string;
}

export interface 绑定职级请求参数{
  
  /**
   * 账号ID
   */
  bizAcctId?: number;
  /**
   * 角色ID
   */
  roleId?: number;
  /**
   * 授权的门店ID
   */
  poiId?: number;
}

export interface 绑定设备结果{
  
  /**
   * 从设备服务注册后，返回的deviceId
   */
  deviceId?: number;
}

export interface 职级筛选条件{
  
  /**
   * 角色类型(0:admin, 1:自定义角色, 2:系统默认角色)传字符串多个用逗号隔开
   */
  roleTypes?: string;
  /**
   * 角色ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 是否包含权限信息
   */
  displayPermissions?: boolean;
}

export interface 角色信息{
  
  /**
   * 角色id
   */
  roleId?: number;
  /**
   * 门店id
   */
  poiId?: number;
  /**
   * 角色名称
   */
  name?: string;
  /**
   * 角色类型
   */
  type?: number;
  /**
   * 操作人
   */
  operator?: number;
  /**
   * 权限
   */
  permissions?: 权限信息[];
  /**
   * 操作时间
   */
  operatorTime?: number;
  /**
   * code
   */
  code?: string;
}

export interface 角色请求信息{
  
  /**
   * 角色id
   */
  roleId?: number;
  /**
   * 门店id
   */
  poiId?: number;
  /**
   * 角色名称
   */
  name?: string;
  /**
   * 权限
   */
  permissions?: 权限信息[];
}

export interface 账户权限信息 {
  
  /**
   * 账户id
   */
  accountId?: number;
  /**
   * 角色类型
   */
  roleType?: number;
  /**
   * 拥有的权限
   */
  permissions?: 权限信息[];
}

export interface 账户职级绑定关系{
  
  /**
   * 账户绑定的职级
   */
  acctRoleMap?: object;
}

export interface 退货单{
  
  /**
   * 退货单总金额
   */
  totalAmount?: string;
  /**
   * 供货商ID
   */
  supplierId?: number;
  /**
   * 退货单商品明细列表
   */
  refundBillItemList?: 退货单商品明细[];
}

export interface 退货单商品明细{
  
  /**
   * sku的ID
   */
  skuId?: number;
  /**
   * sku名称
   */
  skuName?: string;
  /**
   * 退货价
   */
  skuPrice?: string;
  /**
   * 退货数量
   */
  skuQuantity?: string;
  /**
   * 商品条形码
   */
  barcode?: string;
  /**
   * 商品退货总金额
   */
  totalAmount?: string;
}

export interface 门店信息{
  
  /**
   * 绑定情况
   */
  bindPoi?: boolean;
  /**
   * 租户Id
   */
  tenantId?: number;
  /**
   * 门店Id
   */
  poiId?: number;
  /**
   * 门店logo
   */
  logo?: string;
  /**
   * 门店名称
   */
  name?: string;
}