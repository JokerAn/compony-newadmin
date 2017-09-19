<template>
  <div class="anclear ">
    <p class="describe">
      <strong>消费记录</strong>
    </p>
    <ul class="describe tab-list">
      <li class="fl tab-list_cor">消费记录</li>

    </ul>
   <div class="fl" style="width: 100%;    padding: 12px 20px;">
     <a class="fl el-button fl btn-black el-button--default tab1 tab-list_cor2" @click="tabClick1">预付费</a>
     <a class="fl el-button fl btn-black el-button--default tab2" @click="tabClick2">后付费</a>
   </div>
    <div class="anclear fff ancontent ancontent1" >
      <div class="anclear fff">
        <!--表格-->
        <TablesData class="an-table" ref="multipleTable2" :tableDatas="vipRecordsOfConsumption" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

          <el-table-column  v-if=vipRecordsOfConsumption.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
          <el-table-column  prop="name" label="产品名称"></el-table-column>
          <el-table-column  prop="money" label="费用"></el-table-column>
          <el-table-column  prop="moneymiaoshu" label="费用描述"></el-table-column>
          <el-table-column  prop="time" label="日期"></el-table-column>
        </TablesData>
        <!--分页-->
        <div class="table-pagination fr">
          <fenYe ref="asdf" :feYeData="vipRecordsOfConsumption"></fenYe>
        </div>


      </div>
    </div>

    <div class="anclear fff ancontent ancontent2" >
      <div class="anclear fff">
        <!--表格-->
        <TablesData class="an-table" ref="multipleTable2" :tableDatas="vipRecordsOfConsumption" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

          <el-table-column  v-if=vipRecordsOfConsumption.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
          <el-table-column  prop="fuwulx" label="服务类型"></el-table-column>
          <el-table-column  prop="fuwuzl" label="服务种类"></el-table-column>
          <el-table-column  prop="fuwumc" label="服务名称"></el-table-column>
          <el-table-column  prop="money" label="已消费金额(元)"></el-table-column>
          <el-table-column  prop="time" label="创建时间"></el-table-column>
          <el-table-column  prop="time" label="结束时间"></el-table-column>
        </TablesData>
        <!--分页-->
        <div class="table-pagination fr">
          <fenYe ref="asdf" :feYeData="vipRecordsOfConsumption"></fenYe>
        </div>


      </div>
    </div>
    <!--表格-->

  </div>


</template>

<script>
  import router from '../../../router'
  import {mapGetters,mapActions} from 'vuex'
  import ElButton from '../../../../node_modules/element-ui/packages/button/src/button'
  export default {
    data() {
      return {

      }
    },
    computed:mapGetters(
      ['vipRecordsOfConsumption']
    ),
    fastSearch(res){
      this.vipRecordsOfConsumption.keyword=res;
      //console.log(res)
      this.searchFilter(this.vipRecordsOfConsumption);
    },
    components:{
      ElButton

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),

//tab切换点击
      tabClick1(){
        $('.ancontent1').show();
        $('.ancontent2').hide();
        $('.tab1').addClass('tab-list_cor2').siblings('.btn-black').removeClass('tab-list_cor2');
      },
      tabClick2(){
        $('.ancontent2').show();
        $('.ancontent1').hide();
        $('.tab2').addClass('tab-list_cor2').siblings('.btn-black').removeClass('tab-list_cor2');
      },

    },

    created:function() {
      var allRes = {};
      allRes.url = 'http://easy-mock.com/mock/59715ceca1d30433d839315c/teldata/logconsume';
      allRes.datas = this.vipRecordsOfConsumption;
      allRes.tiems = 20000;

      this.getTableData(allRes);

//      this.handleSizeChange();
    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.vipRecordsOfConsumption);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
      })
    }



  }
</script>
<style scoped>
  .tab-list{
    height:50px;
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
  .tableSearch input{
    width:220px;
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
  .zhifus>li{
    float: left;
  }
  .zhifus>li>input{
    margin: 4px 4px 0 0;
    vertical-align: middle;
  }
  .btn-black{
    font-size:12px;
  }
  .help-inline>a{
    color: #1f90c8;
  }

  .ancontent2{
    display: none;
  }

  .tab-list_cor2{
    background:#ccc !important;
    font-size:12px;
    color: #fff;
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

  .ancontent2{
    padding-top:5px;
  }

</style>

