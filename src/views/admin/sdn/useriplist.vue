<template>
  <div class="anclear ">
    <p class="describe">
      <strong>用户IP管理 </strong>负责分配用户IP(展示值为当前所选择用户的已分配IP)
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="userIpList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"  >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="fenpei"   >
              <i class="iconfont icon-fenpei"></i>
              分配</el-button>
          </li>
          <li class="fl">
            <el-button @click="huishou"  >
              <i class="iconfont icon-revert"></i>
              回收</el-button>
          </li>
        </ul>
        <div class="anclear fl tableSearch" v-show="userIpList.hasSearch">
          <el-input class="fl" v-model="userIpList.keyword" placeholder="IP掩码或网关" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(userIpList)" >搜索</el-button>
        </div>

        <div class="anclear fl fastSearch">
          <!--<el-radio-group v-model="radio2" @change="fastSearch">--><!--官方推荐-->
          <el-radio-group v-model="radio2" @click.native="fastSearch(radio2)"><!--自己写的-->

            <el-radio :label="''">全部</el-radio>
            <el-radio :label="'未使用'">未使用</el-radio>
            <el-radio :label="'已使用'">已使用</el-radio>
          </el-radio-group>
        </div>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="userIpList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=userIpList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=userIpList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="用户"></el-table-column>
        <el-table-column  prop="registerTime" label="IP地址" width="110px"></el-table-column>
        <el-table-column  prop="email" label="子网掩码"></el-table-column>
        <el-table-column  prop="form" label="网关" width="80"></el-table-column>
        <el-table-column  prop="phone" label="状态"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="userIpList"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli ziwangyanma">
          <li >
            <div>客户：</div>
            <div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </li>
          <li>
            <div>IP地址：</div>
            <div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </li>
          <li>
            <div>网关地址：</div>
            <div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </li>
          <li>
            <div>子网掩码(CIDR记法)：</div>
            <div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle"  :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <p style="text-align: center">确定回收?</p>
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
        input:'',
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
      ['userIpList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),
      fastSearch(res){
        this.userIpList.keyword=res;
//        console.log(res)
        this.searchFilter(this.userIpList);
      },
      fenpei(){
        if(this.userIpList.selected.length==1){
          this.pop(['分配',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.userIpList.selected);
      },
      huishou(){
        if(this.userIpList.selected.length==1){
          this.pop(['回收',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun() {
        for (var i = 0; i < this.userIpList.tableData.length; i++) {
          if (JSON.stringify(this.userIpList.tableData[i]) == JSON.stringify(this.userIpList.selected[0])) {
            this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.userIpList.tableData[i], false);
            this.userIpList.tableData.splice(i, 1);
          } else {
          }
        }
        ;
        this.searchFilter(this.userIpList);
      },

      nextPage(res){
        this.this.router.beforeEach((to, from, next) => {
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
      allRes.datas=this.userIpList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.userIpList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.userIpList.selected=[];
        this.userIpList.keyword=''
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

