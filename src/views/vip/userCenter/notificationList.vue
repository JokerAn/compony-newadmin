<template>
  <div class="anclear ">
    <p class="describe">
      通知
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
              创建
            </el-button>
          </li>
          <li class="fl">
            <el-button  @click="deleteLine"  >
              <i class="iconfont icon-tongzhi1 symbol"></i>
              系统通知
            </el-button>
          </li>
          <li class="fl">
            <el-select v-model="language" placeholder="更多操作" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>

        </ul>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="vipInvoiceManagement" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=vipInvoiceManagement.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=vipInvoiceManagement.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="id" label="名称" width="80" ></el-table-column>
        <el-table-column  prop="account" label="手机号码"></el-table-column>
        <el-table-column  prop="registerTime" label="邮箱" width="110px"></el-table-column>
        <el-table-column  prop="registerTime" label="创建时间" width="110px"></el-table-column>
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
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <p style="text-align: center">确定删除?...</p>
          </li>
        </ul>
      </div>
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
//点击划价
      shenqing(){
        this.pop(['申请',this.pop1])
      },
      pop1fun(){//对划价进行的一系列的操作
        console.log(this.vipInvoiceManagement.selected);
        console.log('dianjile hua jia');
      },
//点击删除
      deleteLine(){
        if(this.vipInvoiceManagement.selected.length==1){
          this.pop(['系统通知',this.pop2])
        }else{
          alert('请仅选择一项')
        }
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

</style>

