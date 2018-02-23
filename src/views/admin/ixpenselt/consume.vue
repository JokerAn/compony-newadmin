<template>
  <div class="anclear ">
    <p class="describe">
      <strong>消费总览 (Consumption overview)  </strong>特制平台消费总览和客户消费总览查询与统计.
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="consume.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh">
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="tongji" >
              <i class="iconfont icon--"></i>
              统计</el-button>
          </li>
          <li class="fl">
            <el-button @click="gailan" >
              <i class="iconfont icon-jihua"></i>
              概览</el-button>
          </li>

        </ul>
      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:consume,value4})">
        </el-date-picker>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="consume" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=consume.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="服务"></el-table-column>
        <el-table-column  prop="registerTime" label="带宽" width="110px"></el-table-column>
        <el-table-column  prop="email" label="路由器"></el-table-column>
        <el-table-column  prop="form" label="主机" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="镜像"></el-table-column>
        <el-table-column  prop="componey" label="ssd"></el-table-column>
        <el-table-column  prop="address" label="备份" width="200"></el-table-column>
        <el-table-column  prop="phone" label="SDN"></el-table-column>
        <el-table-column  prop="phone" label="合计"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="consume"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>统计</p>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
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
        radio2:'',
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
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
      ['consume']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.consume.keyword=res;
//        console.log(res)
        this.searchFilter(this.consume);
      },
      tongji(){
          this.pop(['统计',this.pop1])
      },
      pop1fun(){
        console.log(this.consume.selected);
      },
      gailan(){
          this.pop(['概览',this.pop2])
      },
      pop2fun(){
        console.log(this.consume.selected);
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
      allRes.url='https://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.consume;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.consume);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.consume.selected=[];
        this.consume.keyword=''
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


