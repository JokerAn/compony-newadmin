<template>
  <div class="anclear ">
    <p class="describe">
      特制网关是一款私有网络访问Internet的高性能网关，支持SNAT代理转发，提供双机热备、自动切换能力，最大支持5Gbps的带宽吞吐能力、1000万以上的并发连接数、10个弹性IP绑定，满足您的海量Internet访问诉求。
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="vipInvoiceManagement.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <p style="    color: #777;">
          点击查看<a href="javascript:;" class="btnblock" @click="tcsm">套餐说明</a>，了解套餐详细信息
        </p>
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh">
              <i class="iconfont icon-shuaxin1 symbol"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button  @click="shenqing" >
              <i class="iconfont icon-chuangjian1 symbol"></i>
              新建
            </el-button>
          </li>
          <li class="fl">
            <a target="_blank" a class="el-button fl btn-black el-button--default" href="http://securityabt.longtel.com/user.php?g=Home&c=Sso&a=api_longteng&ak=CA512E69460F8F1F9F62485864C464225A415EC458578E08">
              控制台
            </a>
          </li>
        </ul>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="vipInvoiceManagement" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=vipInvoiceManagement.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="订单内容"></el-table-column>
        <el-table-column  prop="account" label="套餐周期"></el-table-column>
        <el-table-column  prop="id" label="金额" width="110px"></el-table-column>
        <el-table-column  prop="registerTime" label="计费开始时间"></el-table-column>
        <el-table-column  prop="registerTime" label="计费截止时间"></el-table-column>
        <el-table-column  prop="id" label="操作" ></el-table-column>
      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="vipInvoiceManagement"></fenYe>
      </div>
    </div>

    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>申请</p>
    </Pop>
    <Pop v-if="pop2.popTitle"  :itemss="pop2" >

    </Pop>






    <div class="intexplain_box">
      <h1 style="font-size: 16px; color:#fff;background:#000;height: 48px;margin:0;padding-left: 12px;line-height: 48px;">
        资费说明
        <span @click="no_disbtn" class="no_disbtn" style="float: right;margin-right: 12px;cursor: pointer;">
                    Ⅹ
                </span>
      </h1>
      <div class="wang_imgboxx" style="text-align: left;padding:16px 0 12px 20px;font-size: 14px;">
        <span class="fl" style="margin: 9px 6px;font-size:12px;color:#777;">带宽规模：</span>
        <div style="margin:4px;" class="wang_imgbox">
          <button class="btactive">10M</button>
          <button>50M</button>
          <button>100M</button>
        </div>
      </div>
      <ul class="list_box listbox" style="display: block;">
        <li style="border: 1px solid #000;padding: 10px;width:672px;text-align: center;">
          面向SOHO办公企业网络、小型连锁门店:TelCloud智慧特制网关（SOHO级）
        </li>
        <li class="h104">
          建议带机量
        </li>
        <li class="h200">
          &lt;50终端
        </li>
        <li class="h104" style="border-left:none;">
          建议接入带宽
        </li>
        <li class="h200">
          &lt;10M
        </li>
        <li class="h104">
          WAN口数量
        </li>
        <li class="h200">
          1千兆电口
        </li>
        <li class="h104" style="border-left:none;">
          LAN口数量
        </li>
        <li class="h200">
          2千兆电口
        </li>
        <li class="h104">
          电源
        </li>
        <li class="h200">
          单电
        </li>
        <li class="h104" style="border-left:none;">
          其他
        </li>
        <li class="h200" style="border-left:none; text-indent: -99999em;">
          其他
        </li>
        <li class="h104" style="    width: 103px;border-right: none;height: 211px;line-height: 190px;text-align: center;">
          六项标准功能
        </li>
        <li style="    width: 566px;">
          <div class="liu_box">
            <p>
              上网行为控制 ---- 用户可以针对应用进行阻断，如工作时间期间禁止QQ聊天、游戏炒股等
            </p>
            <p>
              安全防护 ---- 用户可针对病毒、木马、恶意网址及多种网络攻击进行过滤和防护；支持基于用户、应用、源目的接口、源目的IP、服务和时间的八元组一体化策略
            </p>
            <p>
              QoS ----用户可基于IP或应用结果进行QoS限制，如限制P2P类软件带宽占用等或对视频会议等关键业务应用保障带宽
            </p>
            <p>
              内网审计与分析 ---- 通过应用识别，用户可以了解网络流量构成并对其进行分析和深入挖掘，可查询和定期导出历史上网行为记录，满足82号令。
            </p>
            <p>
              VPN功能-----支持GRE、IPSec、SSL VPN（2条）等多种VPN业务模式。支持多种平台移动终端VPN接入。
            </p>
            <p>
              认证管理----支持本地PORTAL用户认证、准的Radius、LDAP等第三方用户认证；支持微信用户认证和短信网关
            </p>
          </div>
        </li>
        <li class="h104" style="width:103px;border-right: none;height: 95px;line-height: 74px;text-align: center;">
          可选服务
        </li>
        <li style="    width: 566px;">
          <div class="liu_box">
            <p>
              1、智能告警----设备异常、流量超载邮件告警。
            </p>
            <p>
              2、BGP带宽加速服务---提供国际带宽访问速度。
            </p>
            <p>
              3、升级服务---首年URL、应用库、病毒库免费更新，一次购买三年服务享5折。
            </p>
            <p>
              4、智能托管---专业团队维护管理。
            </p>
          </div>
        </li>
      </ul>
      <ul class="list_box listbox">
        <li style="border: 1px solid #000;padding: 10px;width:671px;text-align: center;">
          面向中小型企业、连锁门店:TelCloud智慧特制网关（标准级）
        </li>
        <li class="h104">
          建议带机量
        </li>
        <li class="h200">
          &lt;100终端
        </li>
        <li class="h104" style="border-left:none;">
          建议接入带宽
        </li>
        <li class="h200">
          &lt;50M
        </li>
        <li class="h104">
          WAN口数量
        </li>
        <li class="h200">
          1千兆Combo接口
        </li>
        <li class="h104" style="border-left:none;">
          LAN口数量
        </li>
        <li class="h200">
          8千兆电口
        </li>
        <li class="h104">
          电源
        </li>
        <li class="h200">
          单电
        </li>
        <li class="h104" style="border-left:none;">
          其他
        </li>
        <li class="h200" style="border-left:none; text-indent: -99999em;">
          其他
        </li>
        <li class="h104" style="border-right: none;height: 190px;line-height: 190px;text-align: center;">
          六项标准功能
        </li>
        <li style="    width: 566px;">
          <div class="liu_box">
            <p>
              上网行为控制 ---- 用户可以针对应用进行阻断，如工作时间期间禁止QQ聊天、游戏炒股等
            </p>
            <p>
              安全防护 ---- 用户可针对病毒、木马、恶意网址及多种网络攻击进行过滤和防护；支持基于用户、应用、源目的接口、源目的IP、服务和时间的八元组一体化策略
            </p>
            <p>
              QoS ----用户可基于IP或应用结果进行QoS限制，如限制P2P类软件带宽占用等或对视频会议等关键业务应用保障带宽
            </p>
            <p>
              内网审计与分析 ---- 通过应用识别，用户可以了解网络流量构成并对其进行分析和深入挖掘，可查询和定期导出历史上网行为记录，满足82号令。
            </p>
            <p>
              VPN功能-----支持GRE、IPSec、SSL VPN（2条）等多种VPN业务模式。支持多种平台移动终端VPN接入。
            </p>
            <p>
              认证管理----支持本地PORTAL用户认证、准的Radius、LDAP等第三方用户认证；支持微信用户认证和短信网关
            </p>
          </div>
        </li>
        <li class="h104" style="border-right: none;height: 74px;line-height: 74px;text-align: center;">
          可选服务
        </li>
        <li style="    width: 566px;">
          <div class="liu_box">
            <p>
              1、智能告警----设备异常、流量超载邮件告警。
            </p>
            <p>
              2、BGP带宽加速服务---提供国际带宽访问速度。
            </p>
            <p>
              3、升级服务---首年URL、应用库、病毒库免费更新，一次购买三年服务享5折。
            </p>
            <p>
              4、智能托管---专业团队维护管理。
            </p>
          </div>
        </li>
      </ul>
      <ul class="list_box listbox">
        <li style="border: 1px solid #000;padding: 10px;width:671px;text-align: center;">
          面向企业、集团连锁、小型商场:TelCloud智慧特制网关（企业级）
        </li>
        <li class="h104">
          建议带机量
        </li>
        <li class="h200">
          &lt;500终端
        </li>
        <li class="h104" style="border-left:none;">
          建议接入带宽
        </li>
        <li class="h200">
          &lt;100M
        </li>
        <li class="h104">
          WAN口数量
        </li>
        <li class="h200">
          2千兆Combo接口
        </li>
        <li class="h104" style="border-left:none;">
          LAN口数量
        </li>
        <li class="h200">
          10千兆电口
        </li>
        <li class="h104">
          电源
        </li>
        <li class="h200">
          双电
        </li>
        <li class="h104" style="border-left:none;">
          其他
        </li>
        <li class="h200" style="border-left:none; text-indent: -99999em;">
          其他
        </li>
        <li class="h104" style="border-right: none;height: 190px;line-height: 190px;text-align: center;">
          六项标准功能
        </li>
        <li style="    width: 566px;">
          <div class="liu_box">
            <p>
              上网行为控制 ---- 用户可以针对应用进行阻断，如工作时间期间禁止QQ聊天、游戏炒股等
            </p>
            <p>
              安全防护 ---- 用户可针对病毒、木马、恶意网址及多种网络攻击进行过滤和防护；支持基于用户、应用、源目的接口、源目的IP、服务和时间的八元组一体化策略
            </p>
            <p>
              QoS ----用户可基于IP或应用结果进行QoS限制，如限制P2P类软件带宽占用等或对视频会议等关键业务应用保障带宽
            </p>
            <p>
              内网审计与分析 ---- 通过应用识别，用户可以了解网络流量构成并对其进行分析和深入挖掘，可查询和定期导出历史上网行为记录，满足82号令。
            </p>
            <p>
              VPN功能-----支持GRE、IPSec、SSL VPN（2条）等多种VPN业务模式。支持多种平台移动终端VPN接入。
            </p>
            <p>
              认证管理----支持本地PORTAL用户认证、准的Radius、LDAP等第三方用户认证；支持微信用户认证和短信网关
            </p>
          </div>
        </li>
        <li class="h104" style="border-right: none;height: 74px;line-height: 74px;text-align: center;">
          可选服务
        </li>
        <li style="    width: 566px;">
          <div class="liu_box">
            <p>
              1、智能告警----设备异常、流量超载邮件告警。
            </p>
            <p>
              2、BGP带宽加速服务---提供国际带宽访问速度。
            </p>
            <p>
              3、升级服务---首年URL、应用库、病毒库免费更新，一次购买三年服务享5折。
            </p>
            <p>
              4、智能托管---专业团队维护管理。
            </p>
          </div>
        </li>
      </ul>

      <div class="fr" style="width: 100%;">
        <button class="intexplain_q" @click="no_disbtn">
          确认
        </button>
      </div>
    </div>








  </div>


</template>

<script>
  import router from '../../../router'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
//        selected:[],
        radio2:'',
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
        options: [{
          value: '选项1',
          label: '修改'
        }, {
          value: '选项2',
          label: '删除'
        }, ],
        language: '更多操作',
        pop2:{
          popTitle:'',
          numTop:'',
          fun:this.pop2fun
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
//        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],//默认
        value4: ''
      }
    },
    computed:mapGetters(
      ['vipInvoiceManagement']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),
      fastSearch(res){
        this.vipInvoiceManagement.keyword=res;
        this.searchFilter(this.vipInvoiceManagement);
      },
//点击划价
      shenqing(){
        this.pop(['申请',this.pop1])
      },
      pop1fun(){//对划价进行的一系列的操作
        console.log(this.vipInvoiceManagement.selected);
        console.log('dianjile hua jia');
      },
//点击删除
      tcsm(){
        $('.intexplain_box').show();
      },
      no_disbtn(){
        $('.intexplain_box').hide();
      },
      pop2fun(){
        for(var i=0;i<this.vipInvoiceManagement.tableData.length;i++){
          if(JSON.stringify(this.vipInvoiceManagement.tableData[i])==JSON.stringify(this.vipInvoiceManagement.selected[0])){
            this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.vipInvoiceManagement.tableData[i],false);
            this.vipInvoiceManagement.tableData.splice(i,1);
          }else{}
        };
        this.searchFilter(this.vipInvoiceManagement);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='https://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.vipInvoiceManagement;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.vipInvoiceManagement);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.vipInvoiceManagement.selected=[];
        this.vipInvoiceManagement.keyword=''
      })
    },

  }
</script>
<style scoped>

  .tableSearch .el-input{
    width:240px
  }

  .tableSearch input{
    width:220px;
  }
  .el-input--small .el-icon-caret-top{
    color: #fff !important;
  }
  .el-input__inner{
    background:#324157;
    color: #fff;
    height:36px !important;
  }
  .btnblock{
    color: #1f90c8;
  }

  .list_box *{
    font-size: 12px;
    color: #777;
  }
  .intexplain_box{
    position: fixed;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 750px;
    z-index: 60001;
    display: none;
    height: 615px;
    margin-left: -325px;
    margin-top: -307px;
  }
  .intexplain_box>.wang_imgboxx>.wang_imgbox>button{
    background: #eee;
    padding: 5px 15px;
    cursor: pointer;
    display: inline-block;
    color: #1f90c8;
    text-align: center;
    border-radius: 24px;
    border: none;
  }
  .list_box>li{
    float: left;
  }
  .list_box{
    overflow: hidden;
    margin-left: 28px;
    width: 694px;
    display: none;
  }
  .intexplain_q{
    padding: 6px 10px;
    background: #3b3f4e;
    outline: none;
    float: right;
    border-radius: 3px;
    margin: 10px;
    margin-right: 50px;
    border: 1px solid #3b3f4e;
    color: #fff;
    cursor: pointer;
  }
  .h104{
    width: 104px;
    border: 1px solid #000;
    padding: 10px;
    border-top: none;
  }
  .h200{
    width: 232px;
    border: 1px solid #000;
    padding: 10px;
    border-top: none;
    border-left: none;
  }
  .liu_box{
    width: 569px  !important;
    border-right: 1px solid #000;
    padding: 10px;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
  }
  .liu_box>p{
    margin: 2px 0;
  }
  .intexplain_box>.wang_imgboxx>.wang_imgbox>button.btactive{
    background: #1f90c8;
    color: #fff;
  }
</style>

