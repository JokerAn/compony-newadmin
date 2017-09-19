export default {
  userType:(state)=>state.userType,
  longtelUserName: (state) => state.longtelUserName,
  leftrouter: (state) => state.leftrouter,
  ziyuanyu: (state) => state.ziyuanyu,
  fuwuyu: (state) => state.fuwuyu,
  leftList: (state) => state.leftList,
  yemian: (state) => state.yemian,
  customerImageTableDatas:(state)=>state.customerImageTableDatas,
  //客户账户二级页面数据
  customer2:(state)=>state.customerImageTableDatas,

  testTableDatas:(state)=>state.testTableDatas,
  //计价管理
  positionManagement:(state)=>state.positionManagement,
  priceUntit:(state)=>state.priceUntit,
  priceQoS:(state)=>state.priceQoS,
  jjglTableDatas:(state)=>state.jjglTableDatas,
  priceStrategy:(state)=>state.priceStrategy,
  assignedPriceStrategy:(state)=>state.assignedPriceStrategy,

  //SDN管理
  applyList:(state)=>state.applyList,
  switchList:(state)=>state.switchList,
  serviceSwitchPortList:(state)=>state.serviceSwitchPortList,
  userSwitchPortList:(state)=>state.userSwitchPortList,
  userIpList:(state)=>state.userIpList,
  nodeList:(state)=>state.nodeList,
  flowList:(state)=>state.flowList,
  islList:(state)=>state.islList,

  //客户管理
  verify:(state)=>state.verify,
  wCustomer:(state)=>state.wCustomer,
  users:(state)=>state.users,
  excelCustomer:(state)=>state.excelCustomer,

  //登录日志
  loginLog:(state)=>state.loginLog,

  //消费管理
  consume:(state)=>state.consume,
  reCharge:(state)=>state.reCharge,

  //身份管理
  Item:(state)=>state.Item,
  Group:(state)=>state.Group,
  Roles:(state)=>state.Roles,
  usersshenfen:(state)=>state.usersshenfen,

  //CAAS管理
  serviceOverview:(state)=>state.serviceOverview,

  //系统管理
  Aggregates:(state)=>state.Aggregates,
  Basicfacts:(state)=>state.Basicfacts,
  Defaults:(state)=>state.Defaults,
  Flavors:(state)=>state.Flavors,
  Floating_ips:(state)=>state.Floating_ips,
  Hypervisors:(state)=>state.Hypervisors,
  Images:(state)=>state.Images,
  Info:(state)=>state.Info,
  Instances:(state)=>state.Instances,
  Metadata_defs:(state)=>state.Metadata_defs,
  Networks:(state)=>state.Networks,
  Operate:(state)=>state.Operate,
  Recycle:(state)=>state.Recycle,
  Resourceusage:(state)=>state.Resourceusage,
  Routers:(state)=>state.Routers,
  serviceSwitchsortList:(state)=>state.serviceSwitchsortList,
  switchList:(state)=>state.switchList,
  userSwitchPortList:(state)=>state.userSwitchPortList,
  Volumes:(state)=>state.Volumes,

  //VIP-管理
  vipRecycle:(state)=>state.vipRecycle,

  //VIP-用户中心
  vipAccountManagement:(state)=>state.vipAccountManagement,
  vipInvoiceManagement:(state)=>state.vipInvoiceManagement,
  vipLoginLog:(state)=>state.vipLoginLog,
  vipNotificationList:(state)=>state.vipNotificationList,
  vipWorkOrderManagement:(state)=>state.vipWorkOrderManagement,

  //VIP-费用中心
  vipAccountOverview:(state)=>state.vipAccountOverview,
  vipRechargeManagement:(state)=>state.vipRechargeManagement,
  vipRecordsOfConsumption:(state)=>state.vipRecordsOfConsumption,

}
