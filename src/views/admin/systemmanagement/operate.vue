<template>
  <div class="anclear ">
    <p class="describe">
      <strong>管理日志 </strong>云平台管理控制台系统用户操作日志
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="Operate.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"  >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="Operate.hasSearch">
          <el-input class="fl" v-model="Operate.keyword" placeholder="筛选关键词 IP和描述" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(Operate)" >搜索</el-button>
        </div>




      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:Operate,value4})">
        </el-date-picker>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="Operate" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=Operate.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="IP"></el-table-column>
        <el-table-column  prop="registerTime" label="操作时间" width="110px"></el-table-column>
        <el-table-column  prop="email" label="描述"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="Operate"></fenYe>
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
      ['Operate']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.Operate.keyword=res;
//        console.log(res)
        this.searchFilter(this.Operate);
      },

      jinyong(){
//        this.Operate.selected=this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection;
//        console.log(this.Operate.selected)
        if(this.Operate.selected.length==1){
//          console.log(this.Operate.selected[0]);//table被选中的集合

//        this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.Operate.tableData[0],true);
          this.Operate.selected[0].type='禁用'
        }else{
          alert('请仅选择一项')
        }
//        console.log(this.Operate.selected);//table被选中的集合
      },

      qiyong(){
        if(this.Operate.selected.length==1){
          this.Operate.selected[0].type='启用'
        }else{
          alert('请仅选择一项')
        }
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
      allRes.datas=this.Operate;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.Operate);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
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


