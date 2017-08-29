<template>
  <div class="anclear ">
    <p class="describe">
      <strong>充值管理</strong>
    </p>
    <ul class="describe tab-list">
      <li class="fl tab1 tab-list_cor" @click="tabClick1">账户充值</li>
      <li class="fl tab2" @click="tabClick2">充值记录</li>
    </ul>
    <div class="anclear fff ancontent ancontent1" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="applyList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <div class="fl zhye" style="width: 100%;">
          账户余额: <span>0.9</span>
        </div>
        <ul id="toggledivpay" class="fl">
          <li class="recharge current">
            <a class="tab-list_cor2 tab3"  @click="tabClick3"><!-- 在线充值 -->
              在线充值
            </a>
          </li>

          <li class="invoices">
            <a class="tab4"  @click="tabClick4">银行转账</a><!-- 充值记录 -->
          </li>
        </ul>
        <div class="fl jine" style="width: 100%;">
         <span class="fl ze" style="width: 100%;"> 总额 (¥)</span>
          <div class="controls">
            <el-input class="fee" type="text"  id="amount_fee" style="width: 200px;" value="100" ></el-input>
            <span class="help-inline error-message" style="display: none;">单笔充值金额最少¥10，若充值金额大于 ¥10000请使用<a class="recharge-method" href="#" data-method="bank">银行转账</a><!-- 银行转账 -->
								</span>
            <!--提示：若充值过程中遇到  -->
            <span class="none help-inline">提示：若充值过程中遇到
								<a href="http://help.alipay.com/lab/help_detail.htm?help_id=247928" target="_blank">交易限额</a><!--交易限额  -->

									问题，请前往相应的网上银行进行调整后再继续。</span><!-- 问题，请前往相应的网上银行进行调整后再继续。 -->
          </div>
        </div>

        <ul class="zhifus">
          <li style="width: 100%;margin-bottom: 20px;">
            <input id="yinhang1" type="radio" name="sel_bank" value="alipay" checked="checked">
            <label for="yinhang1" class="pay_logo logo"></label>
          </li>
          <li class="zhifus-r">
            <input id="yinhang2" type="radio" name="sel_bank" value="alipay" checked="checked">
            <label for="yinhang2"  class="pay_logo logo2"></label>
          </li>
          <li class="zhifus-r">
            <input id="yinhang3" type="radio" name="sel_bank" value="alipay" checked="checked">
            <label for="yinhang3"  class="pay_logo logo3"></label>
          </li>
          <li class="zhifus-r">
            <input id="yinhang4" type="radio" name="sel_bank" value="alipay" checked="checked">
            <label for="yinhang4" l class="pay_logo logo4"></label>
          </li>
        </ul>
        <div class="blankTransfer fl" style="display: none"><!-- 银行转账 -->
          <table class="table blanktable" border="1px" style="border:1px solid #e4eaec">
            <thead>
            <tr>
              <th>开户银行</th>
              <th>账户名称</th>
              <th>账户号</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>中国银行北京皂君庙支行</td>
              <td>北京龙腾佳讯科技股份公司</td>
              <td>325956028212</td>
            </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" style="margin-top:30px;padding-right:50px;">
            <p>建议使用北京/广东区域资源的用户，向“北京龙腾佳讯科技股份公司”转账；</p>
            <p>请在转帐或汇款时在留言栏或备注栏注明您单位名称或姓名、以及您在龙腾云的登录邮箱，以便于我们区分汇款来源、并及时登记到您名下。建议您在完成汇款后把银行回单发送给kfm@longtel.com</p>
            <p>如果您需要开具发票，请前往“<a aaa="1111" href="javascript:;">发票管理</a>”页面。</p>
          </div>
        </div>
        <div class="fl btnbox" style="width: 100%;">
          <a class="el-button fl btn-black el-button--default">充值</a>
        </div>
      </div>
    </div>

    <div class="anclear fff ancontent ancontent2" >
      <div class="anclear fff">
        <div class="fl zhye" style="width: 100%;">
          账户余额: <span>0.9</span>
        </div>
        <!--表格-->
        <TablesData class="an-table" ref="multipleTable2" :tableDatas="vipRechargeManagement" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

          <el-table-column  v-if=vipRechargeManagement.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
          <el-table-column  prop="online" label="充值方式"></el-table-column>
          <el-table-column  prop="money" label="充值金额(元)"></el-table-column>
          <el-table-column  prop="time" label="充值时间"></el-table-column>
          <el-table-column  prop="pay" label="充值平台"></el-table-column>
          <el-table-column  prop="success" label="状态"></el-table-column>
        </TablesData>
        <!--分页-->
        <div class="table-pagination fr">
          <fenYe ref="asdf" :feYeData="vipRechargeManagement"></fenYe>
        </div>


      </div>
    </div>
      <!--表格-->

  </div>


</template>

<script>
  import router from '../../../router'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed:mapGetters(
      ['vipRechargeManagement']
    ),
    fastSearch(res){
      this.vipRechargeManagement.keyword=res;
        //console.log(res)
      this.searchFilter(this.vipRechargeManagement);
    },
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),

//tab切换点击
      tabClick1(){
       $('.tab1').addClass('tab-list_cor').siblings('li').removeClass('tab-list_cor');
       $('.ancontent1').show();
       $('.ancontent2').hide();
      },
      tabClick2(){
       $('.tab2').addClass('tab-list_cor').siblings('li').removeClass('tab-list_cor');
       $('.ancontent2').show();
       $('.ancontent1').hide();
      },
      tabClick3(){
        $('.tab3').addClass('tab-list_cor2').parent('li').siblings('li').find('a').removeClass('tab-list_cor2');
        $('.chongzhi').show();
        $('.blankTransfer').hide();
        $('.jine').show();
        $('.zhifus').show();
      },
      tabClick4(){
        $('.tab4').addClass('tab-list_cor2').parent('li').siblings('li').find('a').removeClass('tab-list_cor2');
        $('.chongzhi').hide();
        $('.blankTransfer').show();
        $('.jine').hide();
        $('.zhifus').hide();
      },

    },

    created:function() {
      var allRes = {};
      allRes.url = 'http://easy-mock.com/mock/59715ceca1d30433d839315c/teldata/recharge';
      allRes.datas = this.vipRechargeManagement;
      allRes.tiems = 20000;

      this.getTableData(allRes);

//      this.handleSizeChange();
    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.vipRechargeManagement);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
      })
    }



  }
</script>
<style scoped>
  .tab-list{
    height:38px;
  }
  .tab-list_cor{
    background: #fff !important;
    font-weight:bold;
  }
  .tab-list_cor2{
    background: #428bca !important;
    color: #fff;
  }
  .el-button{
    padding:8px 14px;
  }
  .tab-list>li{
    width:84px;
    background: #d6dfe2;
    border-radius: 3px 3px 0 0;
    margin-right: 5px;
    height:38px;
    cursor: pointer;
    text-align: center;
    line-height:38px;
  }
  .tableSearch .el-input{
    width:240px
  }

  .tableSearch input{
    width:220px;
  }
  #toggledivpay{
    margin-bottom: 18px;
  }
  #toggledivpay>li{
    list-style-type: none;
    float: left;
  }
  #toggledivpay>li>a{
    float: left;
    padding: 15px 30px;
    color: #fff;
    background: #2b2b33;
  }
  .controls>input{
    border: 0 none;
    border: 2px solid #cbcad8;
    height:34px;
    background: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    width: 210px;
    border-radius: 3px;
    -webkit-appearance: none;
  }
  .zhifus{
    float: left;
    margin:20px 0 20px 0;
    width:100%;
  }
  .zhifus>li{
    float: left;
  }
  .zhifus>li>input{
    margin: 4px 4px 0 0;
    vertical-align: middle;
  }
  .pay_logo.logo{
    background:url('../../../images/zhifubao.png')center;
  }
  .pay_logo.logo2{
    background:url('../../../images/yinlianzhifu.jpg')center;
    background-size: 100%;
  }
  .pay_logo.logo3{
    background:url('../../../images/wukazhifu.jpg')center;
    background-size: 100%;
  }
  .pay_logo.logo4{
    background:url('../../../images/B2Bzhifu.jpg')center;
    background-size: 100%;
  }
  .pay_logo{
    display: inline-block;
    width: 150px;
    height: 38px;
    vertical-align: middle;
    background: #fff;
    cursor: pointer;
    border: 1px solid #ccc;
    background-repeat: no-repeat;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .zhye{
    font-size:18px;
    margin-bottom: 20px;
  }
  .ze{
    margin-bottom: 10px;
  }
  .jine{
    font-size:14px;
  }
  .help-inline{
    font-style: italic;
    color: #777;
    font-size:12px;
    margin-left:30px;
  }
  .help-inline>a{
    color: #1f90c8;
  }
  .zhifus-r{
    margin-right: 36px;
  }
  .ancontent2{
    display: none;
  }
  .table.blanktable{
    width: 100%;
    clear: both;
    max-width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 15px 0;
  }
  .table thead th{
    background: #e4eaec;
    color: #58666e;
    padding: 10px;
    font-weight: 400;
    font-size: 12px;
    empty-cells: show;
  }
  .table td{
    padding: 10px;
    font-weight: 400;
    font-size: 12px;
    empty-cells: show;
  }
  .table tr{
    text-align: left;
  }
  .alert.alert-warning{
    clear: both;
    margin: 0 0 10px;
    color: #c09853;
    background: #fcf8e3;
    padding: 10px;
    line-height: 1.6em;
    border-color: #faf3cd;
  }
  .ancontent2{
    padding-top:5px;
  }
  a[aaa='1111']{
    color: #1f90c8;
  }
</style>

