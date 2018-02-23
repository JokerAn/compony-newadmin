// import Vue from 'vue';
// import Router from 'vue-router';
// const _import = require('./_import_' + process.env.NODE_ENV);
// // in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading
//
// /* layout */
// import Layout from '../views/layout/Layout';
//
// /* login */
// const Login = _import('login/index');
//
// /* dashboard */
// const dashboard = _import('dashboard/index');
//
// /* error page */
// const Err404 = _import('404');
//
// /* demo page */
// const Form = _import('page/form');
// const Table = _import('table/index');
//
// //特制计算基础服务
// const ConsoleHome = _import('console/consoleHome');
// const ServiceOverview = _import('console/serviceoverview');
// const CustomerImage = _import('console/customerimage');
// const BackUp = _import('console/backup');
// const LogoPerate = _import('console/logoperate');
//
// //计价管理
// const AssignedPriceStrategy = _import('admin/priceManagement/assignedPriceStrategy');
// const BasePrice = _import('admin/priceManagement/basePrice');
// const PositionManagement = _import('admin/priceManagement/positionManagement');
// const PriceQoS = _import('admin/priceManagement/priceQoS');
// const PriceStrategy = _import('admin/priceManagement/priceStrategy');
// const PriceUntit = _import('admin/priceManagement/priceUntit');
//
// //SDN
// const AplyList = _import('admin/sdn/applylist');
// const SwitchList = _import('admin/sdn/switchlist');
// const ServiceSwitchPortList = _import('admin/sdn/serviceswitchsortlist');
// const UserSwitchPortList = _import('admin/sdn/userswitchportlist');
// const UserIPList = _import('admin/sdn/useriplist');
// const NodeList = _import('admin/sdn/nodelist');
// const FlowList = _import('admin/sdn/flowlist');
// const IslList = _import('admin/sdn/isllist');
//
//
// //系统管理
// const BasicFacts = _import('admin/systemmanagement/basicfacts');
// const ResourCeusage = _import('admin/systemmanagement/resourceusage');
// const HypervIsors = _import('admin/systemmanagement/hypervisors');
// const AggRegates = _import('admin/systemmanagement/aggregates');
// const InsTances = _import('admin/systemmanagement/instances');
// const VoLumes = _import('admin/systemmanagement/volumes');
// const FlaVors = _import('admin/systemmanagement/flavors');
// const ImaGes = _import('admin/systemmanagement/images');
// const NetWorks = _import('admin/systemmanagement/networks');
// const RouTers = _import('admin/systemmanagement/routers');
// const FloaTing_ips = _import('admin/systemmanagement/floating_ips');
// const DeFaults = _import('admin/systemmanagement/defaults');
// const RecYcle = _import('admin/systemmanagement/recycle');
// const MetaData_defs = _import('admin/systemmanagement/metadata_defs');
// const OperaTe = _import('admin/systemmanagement/operate');
// const AdminInfo = _import('admin/systemmanagement/info');
//
// //身份管理
// const Item = _import('admin/identityinformation/item');
// const Users = _import('admin/identityinformation/users')
// const Groups = _import('admin/identityinformation/groups');
// const Roles = _import('admin/identityinformation/roles')
//
// //身份管理
// const Consume = _import('admin/ixpenselt/consume');
// const Recharge = _import('admin/ixpenselt/recharge');
//
// //caas管理
// const ServiceOVerview = _import('admin/caas/serviceoverview');
//
// // 客户管理
// const ExcelCustomer = _import('admin/customermanagement/excelCustomer');
// const Customer = _import('admin/customermanagement/customer');
// const Customer2 = _import('admin/customermanagement/customer2')
// const Wcustomer = _import('admin/customermanagement/wcustomer');
// const VerIfy = _import('admin/customermanagement/verify');
// const UseRS = _import('admin/customermanagement/users');
//
// // 帐号管理
// const AccountManagement = _import('admin/accountmanagement/accountManagement');
//
// // 登陆日志
// const LoginLog = _import('admin/loginlog/loginlog');
//
//
// /************************   z@z   ************************/
// //资源域
// //计算
// const CloudHost = _import('vip/calculation/cloudHost');
// const Image = _import('vip/calculation/image');
// const Survey = _import('vip/calculation/survey');
//
// //网络
// const FloatIP = _import('vip/network/floatIP');
// const NetworkTopology = _import('vip/network/networkTopology');
// const PrivateNetwork = _import('vip/network/privateNetwork');
// const Router2 = _import('vip/network/router');
//
// //存储
// const Backups = _import('vip/storage/backups');
// const Volume = _import('vip/storage/volume');
//
// //安全
// const Firewall = _import('vip/saft/firewall');
// const SaftTeam = _import('vip/saft/saftTeam');
// const SecretKey = _import('vip/saft/secretKey');
//
//
// //服务域
// //安全特制防护服务
// const CloudGateway = _import('vip/cloudSafe/cloudGateway');
// const CloudKD = _import('vip/cloudSafe/cloudKD');
//
// // 企业软件服务
// const CloudWatch = _import('vip/enterpriseSoftware/cloudWatch');
//
// // 管理
// const Recycle = _import('vip/administration/recycle');
//
// //用户中心
// const AccountManagement2 = _import('vip/userCenter/accountManagement');
// const InvoiceManagement = _import('vip/userCenter/invoiceManagement');
// const LoginLog2  = _import('vip/userCenter/loginLog');
// const NotificationList = _import('vip/userCenter/notificationList');
// const WorkOrderManagement = _import('vip/userCenter/workOrderManagement');
//
// //费用中心
// const AccountOverview = _import('vip/moneyCenter/accountOverview');
// const RechargeManagement = _import('vip/moneyCenter/rechargeManagement');
// const RecordsOfConsumption = _import('vip/moneyCenter/recordsOfConsumption');
//
//
//
//
//
//
//
//
//
//
//
// export default{
//   routes:[
//     { path: '/login', component: Login, hidden: true },
//     { path: '/404', component: Err404, hidden: true },
//     {
//       path: '/',
//       component: Layout,
//       redirect: '/dashboard',
//       name: 'Home',
//       hidden: true,
//       children: [
//         { path: 'dashboard', component: dashboard },
//         //客户账户二级页面
//         { path: '/management/customer!details', component: Customer2, name: '客户账户信息'  },
//       ]
//     },
//
//
//
//     //系统管理
//     {
//       path: '/admin',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '系统管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'basicfacts', component: BasicFacts, name: '概况' },
//         { path: 'resourceusage', component: ResourCeusage, name: '资源使用量' },
//         { path: 'hypervisors', component: HypervIsors, name: '虚拟机管理' },
//         { path: 'aggregates', component: AggRegates, name: '主机聚合' },
//         { path: 'instances', component: InsTances, name: '电脑' },
//         { path: 'volumes', component: VoLumes, name: '卷' },
//         { path: 'flavors', component: FlaVors, name: '电脑类型' },
//         { path: 'images', component: ImaGes, name: '镜像' },
//         { path: 'networks', component: NetWorks, name: '网络' },
//         { path: 'routers', component: RouTers, name: '路由' },
//         { path: 'floating_ips', component: FloaTing_ips, name: '浮动IP' },
//         { path: 'defaults', component: DeFaults, name: '默认值' },
//         { path: 'recycle', component: RecYcle, name: '回收站' },
//         { path: 'metadatadefs', component: MetaData_defs, name: '特制数据定义' },
//         { path: 'operate', component: OperaTe, name: '管理日志' },
//         { path: 'info', component: AdminInfo, name: '系统信息' },
//       ]
//     },
//     //身份管理
//     {
//       path: '/identity',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '身份管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'item', component: Item, name: '项目' },
//         { path: 'users', component: Users, name: '用户' },
//         { path: 'groups', component: Groups, name: '组' },
//         { path: 'roles', component: Roles, name: '角色' },
//       ]
//     },
//     //消费管理
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '消费管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'consume', component: Consume, name: '消费总览' },
//         { path: 'recharge', component: Recharge, name: '充值总览' },
//       ]
//     },
// //计价管理
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '计价管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'positionManagement', component: PositionManagement, name: '位置管理' },
//         { path: 'priceUntit', component: PriceUntit, name: '计价单元' },
//         { path: 'priceQoS', component: PriceQoS, name: '服务质量' },
//         { path: 'basePrice', component:BasePrice, name: '基价管理' },
//         { path: 'priceStrategy', component: PriceStrategy, name: '计价策略' },
//         { path: 'assignedPriceStrategy', component: AssignedPriceStrategy, name: '指派计价策略' },
//       ]
//     },
//     //sdn管理
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: 'SDN管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'apply!list', component: AplyList, name: '用户申请管理' },
//         { path: 'switch!list', component: SwitchList, name: '物理交换机管理' },
//         { path: 'serviceswitchport!list', component: ServiceSwitchPortList, name: '物理端口管理' },
//         { path: 'userswitchport!list', component: UserSwitchPortList, name: '用户端口管理' },
//         { path: 'userip!list', component: UserIPList, name: '用户IP管理' },
//         { path: 'node!list', component: NodeList, name: 'Node管理' },
//         { path: 'flow!list', component: FlowList, name: '流管理' },
//         { path: 'isl!list', component: IslList, name: 'ISL管理' },
//       ]
//     },
//     //caas管理
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: 'caas管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'serviceoverview', component: ServiceOVerview, name: 'caas划价' }
//       ]
//     },
//     //客户管理
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '客户管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['admin'] },
//       children: [
//         { path: 'excelserver/customer', component: ExcelCustomer, name: 'EXCEL客户账户' },
//         { path: 'customer', component: Customer, name: '客户账户' },
//         { path: 'wcustomer', component: Wcustomer, name: '告警客户' },
//         { path: 'verify', component: VerIfy, name: '账号认证' },
//         { path: 'user', component: UseRS, name: '系统用户' }
//       ]
//     },
//     //账户管理
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: true,
//       meta: { role: ['admin'] },
//       children: [{ path: 'accountmanagement', component: AccountManagement, name: '账户管理', meta: { role: ['admin'] } }]
//     },
//     //登陆日志
//     {
//       path: '/management',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: true,
//       meta: { role: ['admin'] },
//       children: [{ path: 'login_log', component: LoginLog, name: '登陆日志', meta: { role: ['admin'] } }]
//     },
//
//
//
//
//     /*********************客户页面 z@z*******************/
// //资源域
//     //计算
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '计算',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       diyu:'ziyuanyu',
//       children: [
//         { path: 'survey', component: Survey, name: '概况' },
//         { path: 'cloudHost', component: CloudHost, name: '电脑' },
//         { path: 'image', component: Image, name: '镜像' },
//       ]
//     },
//
// //网络
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '网络',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       diyu:'ziyuanyu',
//       children: [
//         { path: 'networkTopology', component: NetworkTopology, name: '网络拓扑' },
//         { path: 'privateNetwork', component: PrivateNetwork, name: '私有网络' },
//         { path: 'router', component: Router2, name: '路由' },
//         { path: 'floatIP', component: FloatIP, name: '浮动IP' },
//       ]
//     },
// //存储
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '存储',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       diyu:'ziyuanyu',
//       children: [
//         { path: 'volume', component: Volume, name: '卷' },
//         { path: 'backups', component: Backups, name: '备份' },
//       ]
//     },
// //安全
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '安全',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       diyu:'ziyuanyu',
//       children: [
//         { path: 'saftTeam', component: SaftTeam, name: '安全组' },
//         { path: 'secretKey', component: SecretKey, name: '密钥对' },
//         { path: 'firewall', component: Firewall, name: '防火墙' },
//       ]
//     },
//
//
//
// //服务域
//
//     //特制安全防护服务
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '特制安全防护服务',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       diyu:'fuwuyu',
//       children: [
//         { path: 'excelserver/cloudGateway', component: CloudGateway, name: '特制网关' },
//         { path: 'cloudKD', component: CloudKD, name: '特制抗D' },
//       ]
//     },
//
//     //特制安全防护服务
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '企业软件服务',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       diyu:'fuwuyu',
//       children: [
//         { path: 'excelserver/cloudWatch', component: CloudWatch, name: '特制监控' },
//       ]
//     },
//
//     //管理
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '管理',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       children: [
//         { path: 'excelserver/recycle', component: Recycle, name: '回收站' },
//       ]
//     },
//
//     //用户中心
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '用户中心',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       children: [
//         { path: 'excelserver/accountManagement', component: AccountManagement2, name: '账号管理' },
//         { path: 'excelserver/workOrderManagement', component: WorkOrderManagement, name: '工单管理' },
//         { path: 'excelserver/invoiceManagement', component: InvoiceManagement, name: '发票管理' },
//         { path: 'excelserver/notificationList', component: NotificationList, name: '通知列表' },
//         { path: 'excelserver/loginLog', component: LoginLog2, name: '登录日志' },
//       ]
//     },
//
//     //费用中心
//     {
//       path: '/console',
//       component: Layout,
//       redirect: 'noredirect',
//       name: '费用中心',
//       icon: 'tubiaoleixingzhengchang',
//       noDropdown: false,
//       meta: { role: ['editor'] },
//       children: [
//         { path: 'excelserver/accountOverview', component: AccountOverview, name: '账户总览' },
//         { path: 'excelserver/rechargeManagement', component: RechargeManagement, name: '充值管理' },
//         { path: 'excelserver/recordsOfConsumption', component: RecordsOfConsumption, name: '消费记录' },
//       ]
//     },
//
//
//
//
//
//
//
//
//
//
//
//
//     { path: '*', redirect: '/404', hidden: true }
//
//
//
//   ]
// }
