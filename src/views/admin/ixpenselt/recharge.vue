<template>
  <div class="anclear ">
    <p class="describe">
      <strong>充值 (Recharge) </strong>云平台充值总览查询与统计
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="reCharge.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh" >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="tongji" >
              <i class="iconfont icon--"></i>
              统计</el-button>
          </li>

        </ul>
      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:reCharge,value4})">
        </el-date-picker>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="reCharge" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->


        <el-table-column  prop="id" label="公司名称" width="60" fixed></el-table-column>
        <el-table-column  prop="account" label="公司行业"></el-table-column>
        <el-table-column  prop="registerTime" label="客户" width="110px"></el-table-column>
        <el-table-column  prop="email" label="充值方式"></el-table-column>
        <el-table-column  prop="form" label="充值金额(元)" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="充值时间"></el-table-column>
        <el-table-column  prop="componey" label="订单号"></el-table-column>
        <el-table-column  prop="address" label="交易号" width="200"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="reCharge"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>概览</p>
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
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
        radio2:'',
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
      ['reCharge']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.reCharge.keyword=res;
//        console.log(res)
        this.searchFilter(this.reCharge);
      },

      tongji(){
        this.pop(['统计',this.pop1])
      },
      pop1fun(){
        console.log(this.reCharge.selected);
      },

      nextPage(res){
        this.router.beforeEach((to, from, next) => {
          next({
            path: '/customer!details',
            query: { redirect: 'sssss' }//把要跳转的地址作为参数传到下一步
          })
        });
//        router.push({path:'customer!details'});
        console.log(this.$route)
      }

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.reCharge;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.reCharge);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.reCharge.selected=[];
        this.reCharge.keyword=''
      })
    }



  }
</script>
<style scoped>

  .tableSearch .el-input{
    width:240px
  }

  .tableSearch input{
    width:220px;
  }
</style>


