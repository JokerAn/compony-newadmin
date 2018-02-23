<template>
  <div class="anclear ">
    <p class="describe">
      网络
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="Networks.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="chuangjian" >
              <i class="iconfont icon-chuangjian1"></i>
              创建网络</el-button>
          </li>
          <li class="fl">
            <el-button @click="shanchu"    >
              <i class="iconfont icon-chuyidong1"></i>
              删除</el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="Networks.hasSearch">
          <el-input class="fl" v-model="Networks.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(Networks)" >搜索</el-button>
        </div>
      </div>

      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="Networks" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=Networks.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=Networks.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="项目"></el-table-column>
        <el-table-column  prop="registerTime" label="网络名称" width="110px"></el-table-column>
        <el-table-column  prop="email" label="已连接的子网"></el-table-column>
        <el-table-column  prop="form" label="DHCP代理" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="共享的"></el-table-column>
        <el-table-column  prop="componey" label="外部"></el-table-column>
        <el-table-column  prop="address" label="状态" width="200"></el-table-column>
        <el-table-column  prop="phone" label="管理状态"></el-table-column>
        <el-table-column  prop="phone" label="动作"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="Networks"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>创建</p>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <p>删除</p>
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
      ['Networks']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.Networks.keyword=res;
//        console.log(res)
        this.searchFilter(this.Networks);
      },

      chuangjian(){
        if(this.Networks.selected.length==1){
          this.pop(['创建网络',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.Networks.selected);
      },
      shanchu(){
        if(this.Networks.selected.length==1){
          this.pop(['删除',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun(){
        console.log(this.Networks.selected);
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
      allRes.datas=this.Networks;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.Networks);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.Networks.selected=[];
        this.Networks.keyword='';
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

