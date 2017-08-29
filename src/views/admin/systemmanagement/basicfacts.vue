<template>
  <div class="anclear ">
    <p class="describe">
      概况
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="Basicfacts.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="xiazai">
              <i class="iconfont icon-xiazai1"></i>
              下载CSV摘要
            </el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="Basicfacts.hasSearch">
          <el-input class="fl" v-model="Basicfacts.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(Basicfacts)" >搜索</el-button>
        </div>
      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:Basicfacts,value4})">
        </el-date-picker>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="Basicfacts" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=Basicfacts.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="项目名称"></el-table-column>
        <el-table-column  prop="registerTime" label="VCPU数量" width="110px"></el-table-column>
        <el-table-column  prop="email" label="磁盘"></el-table-column>
        <el-table-column  prop="form" label="内存" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="VCPU小时数"></el-table-column>
        <el-table-column  prop="componey" label="磁盘GB小时数"></el-table-column>
        <el-table-column  prop="address" label="内存MB小时" width="200"></el-table-column>


      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="Basicfacts"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>下载CSV摘要</p>
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
      ['Basicfacts']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.Basicfacts.keyword=res;
//        console.log(res)
        this.searchFilter(this.Basicfacts);
      },

      xiazai(){
          this.pop(['下载CSV摘要',this.pop1])
      },
      pop1fun(){
        console.log(this.Basicfacts.selected);
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
      allRes.datas=this.Basicfacts;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.Basicfacts);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.Basicfacts.selected=[];
        this.Basicfacts.keyword='';
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


