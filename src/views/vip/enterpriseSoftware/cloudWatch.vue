<template>
  <div class="anclear ">
    <p class="describe">
      是一款端到端一体化实时监控解决方案的产品。通过该产品， 用户可以基于海量的数据迅速便捷地通过定制化为企业带来秒级的业务监控和响应能力。
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="vipInvoiceManagement.buttons" ></ButtonGroup>-->
      <div class="anclear fff">

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
            <el-button  @click="chakan" >
              <i class="iconfont icon-chuangjian1 symbol"></i>
              查看密码
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
      <p>查看密码</p>
    </Pop>



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
//申请
      shenqing(){
        this.pop(['申请',this.pop1])
      },
      pop1fun(){//对划价进行的一系列的操作
        console.log(this.vipInvoiceManagement.selected);
        console.log('dianjile hua jia');
      },
//查看密码
      chakan(){
        this.pop(['查看密码',this.pop2])
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
    width: 568px  !important;
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

