import * as types  from './types'
import axios  from 'axios'
import getters from './getters';
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie';




const _import = require('../router/_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');

/* dashboard */
const dashboard = _import('dashboard/index');

/* error page */
const Err404 = _import('404');

/* demo page */
const Form = _import('page/form');
const Table = _import('table/index');

//云计算基础服务
const ConsoleHome = _import('console/consoleHome');
const ServiceOverview = _import('console/serviceoverview');
const CustomerImage = _import('console/customerimage');
const BackUp = _import('console/backup');


//计价管理
const AssignedPriceStrategy = _import('admin/priceManagement/assignedPriceStrategy');
const BasePrice = _import('admin/priceManagement/basePrice');
const PositionManagement = _import('admin/priceManagement/positionManagement');
const PriceQoS = _import('admin/priceManagement/priceQoS');
const PriceStrategy = _import('admin/priceManagement/priceStrategy');
const PriceUntit = _import('admin/priceManagement/priceUntit');

//SDN
const AplyList = _import('admin/sdn/applylist');
const SwitchList = _import('admin/sdn/switchlist');
const ServiceSwitchPortList = _import('admin/sdn/serviceswitchsortlist');
const UserSwitchPortList = _import('admin/sdn/userswitchportlist');
const UserIPList = _import('admin/sdn/useriplist');
const NodeList = _import('admin/sdn/nodelist');
const FlowList = _import('admin/sdn/flowlist');
const IslList = _import('admin/sdn/isllist');


//系统管理
const BasicFacts = _import('admin/systemmanagement/basicfacts');
const ResourCeusage = _import('admin/systemmanagement/resourceusage');
const HypervIsors = _import('admin/systemmanagement/hypervisors');
const AggRegates = _import('admin/systemmanagement/aggregates');
const InsTances = _import('admin/systemmanagement/instances');
const VoLumes = _import('admin/systemmanagement/volumes');
const FlaVors = _import('admin/systemmanagement/flavors');
const ImaGes = _import('admin/systemmanagement/images');
const NetWorks = _import('admin/systemmanagement/networks');
const RouTers = _import('admin/systemmanagement/routers');
const FloaTing_ips = _import('admin/systemmanagement/floating_ips');
const DeFaults = _import('admin/systemmanagement/defaults');
const RecYcle = _import('admin/systemmanagement/recycle');
const MetaData_defs = _import('admin/systemmanagement/metadata_defs');
const OperaTe = _import('admin/systemmanagement/operate');
const AdminInfo = _import('admin/systemmanagement/info');

//身份管理
const Item = _import('admin/identityinformation/item');
const Users = _import('admin/identityinformation/users')
const Groups = _import('admin/identityinformation/groups');
const Roles = _import('admin/identityinformation/roles')

//消费管理
const Consume = _import('admin/ixpenselt/consume');
const Recharge = _import('admin/ixpenselt/recharge');

//caas管理
const ServiceOVerview = _import('admin/caas/serviceoverview');

// 客户管理
const ExcelCustomer = _import('admin/customermanagement/excelCustomer');
const Customer = _import('admin/customermanagement/customer');
const Customer2 = _import('admin/customermanagement/customer2')
const Customer3 = _import('admin/customermanagement/customer3')
const Wcustomer = _import('admin/customermanagement/wcustomer');
const VerIfy = _import('admin/customermanagement/verify');
const UseRS = _import('admin/customermanagement/users');

// 帐号管理
const AccountManagement = _import('admin/accountmanagement/accountManagement');

// 登陆日志
const LoginLog = _import('admin/loginlog/loginlog');
//操作日志
const LogoPerate = _import('admin/loginlog/logoperate');

/************************   z@z   ************************/
//资源域
//计算
const CloudHost = _import('vip/calculation/cloudHost');
const Image = _import('vip/calculation/image');
const Survey = _import('vip/calculation/survey');

//网络
const FloatIP = _import('vip/network/floatIP');
const NetworkTopology = _import('vip/network/networkTopology');
const PrivateNetwork = _import('vip/network/privateNetwork');
const Router2 = _import('vip/network/router');

//存储
const Backups = _import('vip/storage/backups');
const Volume = _import('vip/storage/volume');

//安全
const Firewall = _import('vip/saft/firewall');
const SaftTeam = _import('vip/saft/saftTeam');
const SecretKey = _import('vip/saft/secretKey');


//服务域
//安全云防护服务
const CloudGateway = _import('vip/cloudSafe/cloudGateway');
const CloudKD = _import('vip/cloudSafe/cloudKD');

// 企业软件服务
const CloudWatch = _import('vip/enterpriseSoftware/cloudWatch');

// 管理
const Recycle = _import('vip/administration/recycle');

//用户中心
const AccountManagement2 = _import('vip/userCenter/accountManagement');
const InvoiceManagement = _import('vip/userCenter/invoiceManagement');
const LoginLog2  = _import('vip/userCenter/loginLog');
const NotificationList = _import('vip/userCenter/notificationList');
const WorkOrderManagement = _import('vip/userCenter/workOrderManagement');

//费用中心
const AccountOverview = _import('vip/moneyCenter/accountOverview');
const RechargeManagement = _import('vip/moneyCenter/rechargeManagement');
const RecordsOfConsumption = _import('vip/moneyCenter/recordsOfConsumption');








const state={//总数据
  getVueRouter:{},
  longtelUrl:{

  },


routerconfigs:{
  routes:[

//系统管理
    {
      path: '/admin',
      component: Layout,
      redirect: 'noredirect',
      name: '系统管理',
      icon: 'iconfont icon-diannao',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'basicfacts', component: BasicFacts, name: '概况' },
        { path: 'resourceusage', component: ResourCeusage, name: '资源使用量' },
        { path: 'hypervisors', component: HypervIsors, name: '虚拟机管理' },
        { path: 'aggregates', component: AggRegates, name: '主机聚合' },
        { path: 'instances', component: InsTances, name: '云主机' },
        { path: 'volumes', component: VoLumes, name: '卷' },
        { path: 'flavors', component: FlaVors, name: '云主机类型' },
        { path: 'images', component: ImaGes, name: '镜像' },
        { path: 'networks', component: NetWorks, name: '网络' },
        { path: 'routers', component: RouTers, name: '路由' },
        { path: 'floating_ips', component: FloaTing_ips, name: '浮动IP' },
        { path: 'defaults', component: DeFaults, name: '默认值' },
        { path: 'recycle', component: RecYcle, name: '回收站' },
        { path: 'metadatadefs', component: MetaData_defs, name: '云数据定义' },
        { path: 'operate', component: OperaTe, name: '管理日志' },
        { path: 'info', component: AdminInfo, name: '系统信息' },
      ]
    },
    //身份管理
    {
      path: '/identity',
      component: Layout,
      redirect: 'noredirect',
      name: '身份管理',
      icon: 'iconfont icon-shenfen-tianchong',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'item', component: Item, name: '项目' },
        { path: 'users', component: Users, name: '用户' },
        { path: 'groups', component: Groups, name: '组' },
        { path: 'roles', component: Roles, name: '角色' },
      ]
    },
    //消费管理
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: '消费管理',
      icon: 'iconfont icon-tubiaozhizuomoban',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'consume', component: Consume, name: '消费总览' },
        { path: 'recharge', component: Recharge, name: '充值总览' },
      ]
    },
//计价管理
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: '计价管理',
      icon: 'iconfont icon-jifeiguanli',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'positionManagement', component: PositionManagement, name: '位置管理' },
        { path: 'priceUntit', component: PriceUntit, name: '计价单元' },
        { path: 'priceQoS', component: PriceQoS, name: '服务质量' },
        { path: 'basePrice', component:BasePrice, name: '基价管理' },
        { path: 'priceStrategy', component: PriceStrategy, name: '计价策略' },
        { path: 'assignedPriceStrategy', component: AssignedPriceStrategy, name: '指派计价策略' },
      ]
    },
    //sdn管理
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: 'SDN管理',
      icon: 'iconfont icon-zuzhijiegou2',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'apply!list', component: AplyList, name: '用户申请管理' },
        { path: 'switch!list', component: SwitchList, name: '物理交换机管理' },
        { path: 'serviceswitchport!list', component: ServiceSwitchPortList, name: '物理端口管理' },
        { path: 'userswitchport!list', component: UserSwitchPortList, name: '用户端口管理' },
        { path: 'userip!list', component: UserIPList, name: '用户IP管理' },
        { path: 'node!list', component: NodeList, name: 'Node管理' },
        { path: 'flow!list', component: FlowList, name: '流管理' },
        { path: 'isl!list', component: IslList, name: 'ISL管理' },
      ]
    },
    //caas管理
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: 'caas管理',
      icon: 'iconfont icon-zuoji1',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'serviceoverview', component: ServiceOVerview, name: 'caas划价' }
      ]
    },
    //客户管理
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: '客户管理',
      icon: 'iconfont icon-yonghu1',
      noDropdown: false,
      meta: { role: ['admin'] },
      children: [
        { path: 'excelcustomer', component: ExcelCustomer, name: 'EXCEL客户账户' },
        { path: 'customer', component: Customer, name: '客户账户' },
        //客户账户二级页面
        { path: 'customer!details',hidden:true, component: Customer2, name: '客户账户信息'  },
        { path: 'customer!loglogin',hidden:true, component: Customer3, name: '简单登录统计'  },
        { path: 'wcustomer', component: Wcustomer, name: '告警客户' },
        { path: 'verify', component: VerIfy, name: '账号认证' },
        { path: 'user', component: UseRS, name: '系统用户' }
      ]
    },
    //账户管理
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: '',
      icon: 'iconfont icon-yonghu2',
      noDropdown: true,
      meta: { role: ['admin'] },
      children: [{ path: 'accountmanagement', component: AccountManagement, name: '账户管理', meta: { role: ['admin'] } }]
    },
    //登陆日志
    {
      path: '/management',
      component: Layout,
      redirect: 'noredirect',
      name: '',
      icon: 'iconfont icon-file',
      noDropdown: true,
      meta: { role: ['admin'] },
      children: [{ path: 'login_log', component: LoginLog, name: '登陆日志', meta: { role: ['admin'] } }]
    },




    /*********************客户页面 z@z*******************/
//资源域
    //计算
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '计算',
      icon: 'iconfont icon-diannao',
      noDropdown: false,
      meta: { role: ['editor'] },
      diyu:'ziyuanyu',
      children: [
        { path: 'survey', component: Survey, name: '概况' },
        { path: 'cloudHost', component: CloudHost, name: '云主机' },
        { path: 'image', component: Image, name: '镜像' },
      ]
    },

//网络
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '网络',
      icon: 'iconfont icon-diqiu',
      noDropdown: false,
      meta: { role: ['editor'] },
      diyu:'ziyuanyu',
      children: [
        { path: 'networkTopology', component: NetworkTopology, name: '网络拓扑' },
        { path: 'privateNetwork', component: PrivateNetwork, name: '私有网络' },
        { path: 'router', component: Router2, name: '路由' },
        { path: 'floatIP', component: FloatIP, name: '浮动IP' },
      ]
    },
//存储
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '存储',
      icon: 'iconfont icon-yunyingpan',
      noDropdown: false,
      meta: { role: ['editor'] },
      diyu:'ziyuanyu',
      children: [
        { path: 'volume', component: Volume, name: '卷' },
        { path: 'backups', component: Backups, name: '备份' },
      ]
    },
//安全
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '安全',
      icon: 'iconfont icon-shandian',
      noDropdown: false,
      meta: { role: ['editor'] },
      diyu:'ziyuanyu',
      children: [
        { path: 'saftTeam', component: SaftTeam, name: '安全组' },
        { path: 'secretKey', component: SecretKey, name: '密钥对' },
        { path: 'firewall', component: Firewall, name: '防火墙' },
      ]
    },



//服务域

    //云安全防护服务
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '云安全防护服务',
      icon: 'iconfont icon-anquan',
      noDropdown: false,
      meta: { role: ['editor'] },
      diyu:'fuwuyu',
      children: [
        { path: 'excelserver/cloudGateway', component: CloudGateway, name: '云网关' },
        { path: 'cloudKD', component: CloudKD, name: '云抗D' },
      ]
    },

    //云安全防护服务
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '企业软件服务',
      icon: 'iconfont icon-guanlian',
      noDropdown: false,
      meta: { role: ['editor'] },
      diyu:'fuwuyu',
      children: [
        { path: 'excelserver/cloudWatch', component: CloudWatch, name: '云监控' },
      ]
    },

    //管理
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '管理',
      icon: 'iconfont icon-set',
      noDropdown: false,
      meta: { role: ['editor'] },
      children: [
        { path: 'excelserver/recycle', component: Recycle, name: '回收站' },
      ]
    },

    //用户中心
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '用户中心',
      icon: 'iconfont icon-yonghu2',
      noDropdown: false,
      meta: { role: ['editor'] },
      children: [
        { path: 'excelserver/accountManagement', component: AccountManagement2, name: '账号管理' },
        { path: 'customer!logoperate',hidden:true, component: LogoPerate, name: '操作日志'  },

        { path: 'excelserver/workOrderManagement', component: WorkOrderManagement, name: '工单管理' },
        { path: 'excelserver/invoiceManagement', component: InvoiceManagement, name: '发票管理' },
        { path: 'excelserver/notificationList', component: NotificationList, name: '通知列表' },
        { path: 'excelserver/loginLog', component: LoginLog2, name: '登录日志' },
      ]
    },

    //费用中心
    {
      path: '/console',
      component: Layout,
      redirect: 'noredirect',
      name: '费用中心',
      icon: 'iconfont icon-tubiaozhizuomoban',
      noDropdown: false,
      meta: { role: ['editor'] },
      children: [
        { path: 'excelserver/accountOverview', component: AccountOverview, name: '账户总览' },
        { path: 'excelserver/rechargeManagement', component: RechargeManagement, name: '充值管理' },
        { path: 'excelserver/recordsOfConsumption', component: RecordsOfConsumption, name: '消费记录' },
      ]
    },





    { path: '*', redirect: '/404', hidden: true,meta: { role: ['editor','admin'] }, }
  ]
},


leftrouter:[
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'home',
    hidden: true,
    children: [
      { path: 'dashboard', component: dashboard },

    ]
  },
  { path: '*', redirect: '/404', hidden: true,meta: { role: ['editor','admin'] }, },

],
  leftList:[],//筛选完后的最终左侧导航(将他加到固定不变的那几个导航中)
  fuwuyu:[],
  ziyuanyu:[],
  dates:{//日期筛选
    startDate:0,
    endDate:999999999999999999999999999999999999999,
  },
  userType:'这是用户类型',
  longtelUserName:Cookies.get('longtelUserName'),

//镜像数据
  customerImageTableDatas:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
//操作日志数据
  testTableDatas:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com'},
      {icon:'plus',name:'新建',url:'www.fff.com'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com'},
      {icon:'delete',name:'删除',url:'www.aaa.com'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData:
      [
        {
          id:991,
          date: '2016-05-02',
          name: '啊啊啊',
          address: '上海市普陀区金沙江路 15111  ',
        }, {
        id:992,
        date: '2016-05-04',
        name: '啊啊啊',
        address: '上海2222市普陀区金沙江路 15222  '
      }, {
        id:993,
        title:'地址',
        date: '2016-05-01',
        name: '啊啊啊',
        address: '上海33333市普陀区金沙江路 15333  ',
      },
        {
          id:994,
          title:'地址',
          date: '2016-05-01',
          name: '啊啊啊',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:995,
          title:'地址',
          date: '2016-05-01',
          name: '啊啊啊',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:996,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:997,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:998,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:999,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1000,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        }, {
        id:1001,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1002,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1003,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },
        {
          id:1004,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1005,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1006,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1007,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1008,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1009,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1010,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1011,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1012,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1013,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },{
        id:1014,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },
        {
          id:1015,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },{
        id:1016,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1017,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1018,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1019,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1020,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1021,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },{
        id:1022,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },
        {
          id:1023,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1024,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1025,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },{
        id:1026,
        title:'地址',
        date: '2016-05-01',
        name: '王小虎3333',
        address: '上海33333市普陀区金沙江路 15333  ',
      },
        {
          id:1027,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1028,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1029,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1030,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1031,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1032,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },
        {
          id:1033,
          title:'地址',
          date: '2016-05-01',
          name: '王小虎3333',
          address: '上海33333市普陀区金沙江路 15333  ',
        },

        {
          id:994,
          date: '2016-05-03',
          name: '王小虎44444',
          address: '上海市44444普陀区金沙江路 15444  '
        }
      ]
  },

  /************** 计价管理开始 ****************************************************************************************/

//位置管理数据
  positionManagement:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'plus',name:'新建',url:'www.fff.com',emit:'jjglTableDatas-newadd'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com',emit:'jjglTableDatas-stop'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com',emit:'jjglTableDatas-restart'},
      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[15, 30, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:false,
    inputIndex:false,
    tableData:
      []
  },

//计价单元数据
  priceUntit:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'plus',name:'新建',url:'www.fff.com',emit:'jjglTableDatas-newadd'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com',emit:'jjglTableDatas-stop'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com',emit:'jjglTableDatas-restart'},
      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[15, 30, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:false,
    inputIndex:false,
    tableData:
      []
  },

  //服务质量数据
  priceQoS:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'plus',name:'新建',url:'www.fff.com',emit:'jjglTableDatas-newadd'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com',emit:'jjglTableDatas-stop'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com',emit:'jjglTableDatas-restart'},
      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[15, 30, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:false,
    inputIndex:false,
    tableData:
      []
  },

//基价管理数据
  jjglTableDatas:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'plus',name:'新建',url:'www.fff.com',emit:'jjglTableDatas-newadd'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com',emit:'jjglTableDatas-stop'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com',emit:'jjglTableDatas-restart'},
      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[15, 30, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:false,
    inputIndex:false,
    tableData:
      []
  },

  //基价策略数据
  priceStrategy:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'plus',name:'新建',url:'www.fff.com',emit:'jjglTableDatas-newadd'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com',emit:'jjglTableDatas-stop'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com',emit:'jjglTableDatas-restart'},
      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[15, 30, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:false,
    inputIndex:false,
    tableData:
      []
  },

//指派基价策略数据
  assignedPriceStrategy:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'plus',name:'新建',url:'www.fff.com',emit:'jjglTableDatas-newadd'},
      {icon:'caret-right',name:'启动',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'caret-right',name:'停止',url:'www.bbb.com',emit:'jjglTableDatas-stop'},
      {icon:'caret-right',name:'重启',url:'www.bbb.com',emit:'jjglTableDatas-restart'},
      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{
      currentPage:1,
      coline:[15, 30, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:false,
    inputIndex:false,
    tableData:
      []
  },

  /************* 计价管理结束 **************/


  /************* SDN管理开始 ****************************************************************************************/
//用户申请管理数据
  applyList:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },

  //物理交换机数据
  switchList:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },

  //物理端口管理数据
  serviceSwitchPortList:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //用户管理端口数据
  userSwitchPortList:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  //用户IP管理
  userIpList:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  //Node管理
  nodeList:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //流管理
  flowList:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //ISL管理
  islList:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},



  /************* SDN管理结束 **************/

/******************客户管理*********************/
   //帐号认证
  verify:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  //告警客户
  wCustomer:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  //系统用户
  users:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  excelCustomer:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },

   /************* 客户管理结束 **************/


  /******************登录日志*********************/
  loginLog:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},

  /************* 登录日志结束 **************/

  /******************消费管理*********************/
  consume:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  reCharge:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},


  /******************消费管理结束*********************/

  /******************身份管理*********************/
  Item:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Group:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Roles:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  usersshenfen:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  /******************身份管理结束*********************/

  /******************系统管理*********************/
  Aggregates:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  serviceOverview:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Basicfacts:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Defaults:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Flavors:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Floating_ips:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Hypervisors:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Images:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Info:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Instances:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Metadata_defs:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Networks:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Operate:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Recycle:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  Resourceusage:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  Routers:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  serviceSwitchsortList:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  switchList:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  userSwitchPortList:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  Volumes:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },

  /******************系统管理结束*********************/

  /******************CAAS管理结束*********************/
  serviceOverview:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  /******************CAAS管理结束*********************/

  /******************VIP-管理*********************/
  //回收站
  vipRecycle:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  /******************VIP-管理结束*********************/

  /******************VIP-用户中心*********************/
  //帐号管理
  vipAccountManagement:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //工单管理
  vipWorkOrderManagement:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  //发票管理
  vipInvoiceManagement:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //通知管理
  vipNotificationList:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //登录日志
  vipLoginLog:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  /******************VIP-用户中心结束*********************/

  /******************VIP-费用中心*********************/
  //账户总览
  vipAccountOverview:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //充值管理
  vipRechargeManagement:{
    selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
      {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
      {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
      {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

      {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

    ],
    lastShowData:[],
    fenYe:{//分页
      currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
    },
    inputSection:true,
    inputIndex:false,
    tableData: []
  },
  //消费记录
  vipRecordsOfConsumption:{
  selected:[],
    editTable:true,
    keyword:'',
    hasSearch:true,
    buttons:[
    {icon:'loading',url:'www.fff.com',emit:'jjglTableDatas-refresh'},
    {icon:'circle-close',name:'禁用',url:'www.ccc.com',emit:'jjglTableDatas-start'},
    {icon:'circle-check',name:'启用',url:'www.fff.com',emit:'jjglTableDatasNewadd'},

    {icon:'delete',name:'删除',url:'www.aaa.com',emit:'jjglTableDatas-delete'},

  ],
    lastShowData:[],
    fenYe:{//分页
    currentPage:1,
      coline:[10, 20, 50, 100],
      allColine:335,
      onePageNum:10,
  },
  inputSection:true,
    inputIndex:false,
    tableData: []
},
  /******************VIP-费用中心结束*********************/

};
const mutations={
  'refresh':function(state){
    window.location.reload()
  },







  'buttonClick':function(state){
    console.log(event.currentTarget.getAttribute("emit"));
  },

  'searchFilter':function(state,datas){//这是筛选器
      if(datas.selected){//点击筛选 清空被选中的选项 因为点击清空 对勾就会消失(没法改变) 所以只能清除选项来保持一致
        datas.selected=[]
      }
      var res=datas.keyword.replace(/(^\s*)|(\s*$)/g,"");
      var arr=[];
      if(datas.tableData){
      // console.log(datas.tableData[i].registerTime)
      for(var i=0;i<datas.tableData.length;i++){
        if(datas.tableData[i].registerTime!==undefined){//按日期查询
          if(JSON.stringify(JSON.stringify(datas.tableData[i])).search(res)!==-1&&
            (new Date(datas.tableData[i].registerTime).getTime())>=state.dates.startDate&&//以后修改registerTime
            (new Date(datas.tableData[i].registerTime).getTime())<=state.dates.endDate){
            arr.push(datas.tableData[i])
          }else{}
        }else if(JSON.stringify(JSON.stringify(datas.tableData[i])).search(res)!==-1){//普通查询
          arr.push(datas.tableData[i])
        }else{}
      };
    }else{
      console.log('后台传来的数据不包含所指定的 tableData');
    }

    datas.fenYe.allColine=arr.length;
    // console.log(arr)

    mutations.fenyedabao(state,datas,arr);
  },

  'fenyedabao':function(state,datas,res){
    if(res==undefined){res=datas.tableData}
    var allDatas=[];
    var len=Math.ceil(datas.fenYe.allColine/datas.fenYe.onePageNum);
    for(var i=0;i<len;i++){
      var a=res.slice(i*datas.fenYe.onePageNum,(i+1)*datas.fenYe.onePageNum);
      allDatas[i]=a;
    }
    datas.lastShowData=allDatas[datas.fenYe.currentPage-1];
  },

  handleDelete(states,res){
    for(var i=0;i<res._self.$props.tableDatas.tableData.length;i++){
      if(JSON.stringify( res._self.$props.tableDatas.tableData[i])==JSON.stringify(res.row)){
        res._self.$props.tableDatas.tableData.splice(i,1)
      }else{}
    };
    mutations.searchFilter(state,res._self.$props.tableDatas);
  },

  handleEdit(states,res){
    // console.log(res);
    res.row.id='000';
    mutations.searchFilter(state,res._self.$props.tableDatas);
  },
  getTableData(states,allRes){
    // console.log(allRes.url);

    axios.get(allRes.url)
      .then(
        function(res){
          // console.log(res.data.tableData);
          allRes.datas.tableData=res.data.tableData;

          mutations.searchFilter(state,allRes.datas);
          // setTimeout(function(){mutations.getTableData(states,allRes);},allRes.tiems)

        }
      )
      .catch(function(res){
        // setTimeout(function(){mutations.getTableData(states,allRes);},allRes.tiems)
        console.log('ERROR--'+res)
      })
  },
  pop(states,res){
    res[1].popTitle=res[0];

  },
  goToPage(states,res){
    states.getVueRouter.push({path:res[0],query:{data:res[1]}})
  },
  getDates(states,res){
    if(res.value4[0]){
      let startDate=res.value4[0].getTime();
      let endDate=res.value4[1].getTime();
      states.dates.startDate=startDate;
      states.dates.endDate=endDate;
    }else{
      states.dates.startDate=0;
      states.dates.endDate=999999999999999999999999999999999999999;
    }
    mutations.searchFilter(states,res.filterData);

  },







  [types.REMOVE](state){ //第一中引入方法 的写法
    state.count--;
  },
  // [REMOVE](state){  //第二中引入方法 的写法
  //     state.count--;
  // }
}


export default {state,mutations,getters}
