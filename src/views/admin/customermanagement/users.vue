<template>
  <div class="anclear ">
    <p class="describe">
      <strong>系统用户 </strong>云平台管理控制台系统用户账户管理
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="usersshenfen.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh" >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="tianjia"  >
              <i class="iconfont icon-chuangjian1"></i>
              添加</el-button>
          </li>
          <li class="fl">
            <el-button @click="xiugai"   >
              <i class="iconfont icon-xiugai"></i>
              修改</el-button>
          </li>
          <li class="fl">
            <el-button @click="shanchu"   >
              <i class="iconfont icon-chuyidong1"></i>
              删除</el-button>
          </li>
          <li class="fl">
            <el-button @click="qiyong"   >
              <i class="iconfont icon-chuangjian1"></i>
              启用</el-button>
          </li>
          <li class="fl">
            <el-button @click="jinyong"  >
              <i class="iconfont icon-chuyidong1"></i>
              禁用</el-button>
          </li>
          <li class="fl">
            <el-button @click="chushi"  >
              <i class="iconfont icon-reset"></i>
              初始密码</el-button>
          </li>


        </ul>
        <div class="anclear fl tableSearch" v-show="usersshenfen.hasSearch">
          <el-input class="fl" v-model="usersshenfen.keyword" placeholder="用户,邮箱,手机和电话" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(usersshenfen)" >搜索</el-button>
        </div>

        <div class="anclear fl fastSearch">
          <!--<el-radio-group v-model="radio2" @change="fastSearch">--><!--官方推荐-->
          <el-radio-group v-model="radio2" @click.native="fastSearch(radio2)"><!--自己写的-->

            <el-radio :label="''">全部</el-radio>
            <el-radio :label="'启用'">启用</el-radio>
            <el-radio :label="'禁用'">禁用</el-radio>
          </el-radio-group>
        </div>


      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="usersshenfen" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=usersshenfen.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=usersshenfen.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="状态"></el-table-column>
        <el-table-column  prop="registerTime" label="用户名称" width="110px"></el-table-column>
        <el-table-column  prop="email" label="邮箱"></el-table-column>
        <el-table-column  prop="form" label="手机" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="电话"></el-table-column>
        <el-table-column  prop="componey" label="创建时间"></el-table-column>
      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="usersshenfen"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli xtyh">
          <li >
            <div>*登录名称：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>密　　码：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>邮　　箱：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>手　　机：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>电　　话：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>所属平台：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>状　　态：</div>
            <div class="marg5">
              <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
              <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
            </div>
          </li>

        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli xtyh">
          <li >
            <div>*登录名称：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>密　　码：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>邮　　箱：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>手　　机：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>电　　话：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>所属平台：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>状　　态：</div>
            <div class="marg5">
              <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
              <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
            </div>
          </li>

        </ul>
      </div>
    </Pop>
    <Pop v-if="pop3.popTitle" :itemss="pop3" >
      <p>导入</p>
    </Pop>
    <Pop v-if="pop4.popTitle" :itemss="pop4" >
      <p>导入</p>
    </Pop>
    <Pop v-if="pop5.popTitle" :itemss="pop5" >
      <p>导入</p>
    </Pop>
    <Pop v-if="pop6.popTitle" :itemss="pop6" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli xtyh">
          <li >
            <div>用户：</div>
            <div class="marg5">{{usersshenfen.selected[0].id}}</div>
          </li>
          <li>
            <div>新密码：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>确认密码：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
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
        radio:'',
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
        pop3:{
          popTitle:'',
          numTop:'',
          fun:this.pop3fun
        },
        pop4:{
          popTitle:'',
          numTop:'',
          fun:this.pop4fun
        },
        pop5:{
          popTitle:'',
          numTop:'',
          fun:this.pop5fun
        },
        pop6:{
          popTitle:'',
          numTop:'',
          fun:this.pop6fun
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
      ['usersshenfen']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.usersshenfen.keyword=res;
//        console.log(res)
        this.searchFilter(this.usersshenfen);
      },
      tianjia(){
          this.pop(['添加', this.pop1]);
      },
      pop1fun(){
        console.log(this.usersshenfen.selected);
      },
      xiugai(){
        if(this.usersshenfen.selected.length==1) {
        this.pop(['修改',this.pop2])
        }else {
          alert('请仅选择一项');
        }
      },
      pop2fun(){
        console.log(this.usersshenfen.selected);
      },
      shanchu(){
        if(this.usersshenfen.selected.length==1) {
        this.pop(['删除',this.pop3])
        }else {
          alert('请仅选择一项');
        }
      },
      pop3fun(){
        console.log(this.usersshenfen.selected);
      },
      qiyong(){
        if(this.usersshenfen.selected.length==1) {
        this.pop(['启用',this.pop4])
        }else {
          alert('请仅选择一项');
        }
      },
      pop4fun(){
        console.log(this.usersshenfen.selected);
      },
      jinyong(){
        if(this.usersshenfen.selected.length==1) {
        this.pop(['禁用',this.pop5])
        }else {
          alert('请仅选择一项');
        }
      },
      pop5fun(){
        console.log(this.usersshenfen.selected);
      },
      chushi(){
        if(this.usersshenfen.selected.length==1) {
        this.pop(['初始密码',this.pop6])
        }else {
          alert('请仅选择一项');
        }
      },
      pop6fun(){
        console.log(this.usersshenfen.selected);
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
      allRes.datas=this.usersshenfen;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.usersshenfen);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.usersshenfen.selected=[];
        this.usersshenfen.keyword='';
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

