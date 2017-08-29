<template>
  <div class="anclear ">
    <p class="describe">
      <strong>用户登录查询</strong>只统计2016年1月4号以后注册的用户登录次数
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="customerImageTableDatas.buttons" ></ButtonGroup>-->
      <div class="anclear fff">


        <div class="anclear fl fastSearch">
         <!-- <el-radio-group v-model="radio2" @click.native="fastSearch(radio2)">
            <el-radio :label="''">全部</el-radio>
            <el-radio :label="'禁用'">禁用</el-radio>
            <el-radio :label="'启用'">启用</el-radio>
          </el-radio-group>-->
        </div>

      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        统计区间：
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:customerImageTableDatas,value4})">
        </el-date-picker>
      </div>

      <!--表格-->
      <div class="anclear fff ancontent" >
        <!--表格-->
        <TablesData class="an-table" ref="multipleTable2" :tableDatas="customerImageTableDatas" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

          <el-table-column  v-if=customerImageTableDatas.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
          <el-table-column  prop="id" label="次数"></el-table-column>
          <el-table-column  prop="registerTime" label="日期"></el-table-column>
        </TablesData>
        <!--分页-->
        <div class="table-pagination fr">
          <fenYe ref="asdf" :feYeData="customerImageTableDatas"></fenYe>
        </div>
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
        value: '龙腾云',
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
          }],

        }, //        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],//默认
        value4: ''
      }
    },
    computed:mapGetters(
      ['customerImageTableDatas']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.customerImageTableDatas.keyword=res;
        this.searchFilter(this.customerImageTableDatas);
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
      allRes.datas=this.customerImageTableDatas;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.customerImageTableDatas);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
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

