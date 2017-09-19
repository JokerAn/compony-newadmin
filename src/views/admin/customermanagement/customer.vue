<template>
  <div class="anclear ">
    <p class="describe">
      <strong>客户账户 ( account ) </strong>所有云平台用户账户以及详细资料
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="customerImageTableDatas.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh">
              <i class="iconfont icon-shuaxin1"></i>
              {{customerImageTableDatas.buttons[0].name}}</el-button>
          </li>
          <li class="fl">
            <el-button @click="jinyong">
              <i class="iconfont icon-chuyidong1"></i>
              {{customerImageTableDatas.buttons[1].name}}</el-button>
          </li>
          <li class="fl">
            <el-button @click="qiyong"  >
              <i class="iconfont icon-chuangjian1"></i>
              {{customerImageTableDatas.buttons[2].name}}</el-button>
          </li>
          <li class="fl">
            <el-button @click="zhipai"  >
              <i class="iconfont icon-fenpei"></i>
              指派</el-button>
          </li>
          <li class="fl">
            <el-button @click="tianjia"  >
              <i class="iconfont icon-chuangjian1"></i>
              添加账户</el-button>
          </li>
          <li class="fl">
            <el-button @click="goToPage(['/management/customer!loglogin'])" >
              <i class="iconfont icon--"></i>
              简单登录统计</el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="customerImageTableDatas.hasSearch">
          <el-input class="fl" v-model="customerImageTableDatas.keyword" placeholder="客户,邮箱,手机和公司" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(customerImageTableDatas)" >搜索</el-button>
        </div>

        <div class="anclear fl fastSearch">
          <el-radio-group v-model="radio2" @click.native="fastSearch(radio2)">
            <el-radio :label="''">全部</el-radio>
            <el-radio :label="'禁用'">禁用</el-radio>
            <el-radio :label="'启用'">启用</el-radio>
          </el-radio-group>
        </div>

      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:customerImageTableDatas,value4})">
        </el-date-picker>
      </div>
      <div class="anclear fl dateSearch">
        合作伙伴:
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="customerImageTableDatas" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=customerImageTableDatas.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=customerImageTableDatas.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="id" label="ID" width="60" fixed></el-table-column>
        <el-table-column   label="状态" width="70">
          <template scope="scope" >
            <el-button type="text" >{{scope.row.type}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="昵称" width="130">
          <template scope="scope" >
            <el-button type="text" @click="goToPage(['/management/customer!details',scope.row])">{{scope.row.name}}</el-button>
            <!--<router-link :to="{path:'/customer/customer!details',query:{data:scope.row}}" tag="a" style="color: #20a0ff;">{{scope.row.name}}</router-link>-->
          </template>
        </el-table-column>
        <el-table-column  prop="account" label="账户"></el-table-column>
        <el-table-column  prop="customerOwner" label="客户归属人"  width="150"></el-table-column>
        <el-table-column  prop="email" label="邮箱"></el-table-column>
        <el-table-column  prop="form" label="来源" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="手机"></el-table-column>
        <el-table-column  prop="componey" label="公司"></el-table-column>
        <el-table-column  prop="address" label="地址" width="200"></el-table-column>
        <el-table-column  prop="phone" label="电话"></el-table-column>
        <el-table-column  prop="industry" label="行业"></el-table-column>
        <el-table-column  prop="registerTime" label="注册时间" width="150"></el-table-column>
        <el-table-column v-if="customerImageTableDatas.editTable"  label="认证" width="80">
          <template scope="scope" >
            <el-button type="text"  size="small" @click="handleEdit(scope)" >{{scope.row.renzheng}}</el-button>
          </template>
        </el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="customerImageTableDatas"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>禁用</p>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <p>启用</p>
    </Pop>
    <Pop v-if="pop3.popTitle" :itemss="pop3" >
      <p>指派</p>
    </Pop>
    <Pop v-if="pop4.popTitle" :itemss="pop4" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli zhzh">
          <li >
            <div>* 登录账户：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>* 密码：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>* 手机：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>公司名称：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>公司地址：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>公司行业：</div>
            <div class="duankou">
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>公司电话：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop5.popTitle" :itemss="pop5" >
      <p>简单</p>
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
        options1: [{
          value: '选项1',
          label: '互联网金融'
        }, {
          value: '选项2',
          label: '视频'
        },
          {
            value: '选项3',
            label: '在线游戏'
          },
          {
            value: '选项4',
            label: '游戏'
          },
          {
            value: '选项5',
            label: '电子商务'
          },
          {
            value: '选项6',
            label: 'Paas'
          },
          {
            value: '选项7',
            label: 'DevOps'
          },
          {
            value: '选项8',
            label: '大数据'
          },
          {
            value: '选项9',
            label: '移动APP'
          },
          {
            value: '选项10',
            label: '媒体'
          },
          {
            value: '选项11',
            label: '科学'
          },
          {
            value: '选项12',
            label: '娱乐'
          },
          {
            value: '选项13',
            label: '商业企业'
          },
          {
            value: '选项14',
            label: '政府'
          },
          {
            value: '选项15',
            label: '个人'
          },
          {
            value: '选项16',
            label: '其它'
          },],
        value1:'',
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
        options: [{
          value: '选项1',
          label: '龙腾云'
        }, {
          value: '选项2',
          label: '测试云'
        }, {
          value: '选项3',
          label: '测试云合作伙伴1'
        }, {
          value: '选项4',
          label: '测试云合作伙伴2'
        }, ],
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

      jinyong(){
        if(this.customerImageTableDatas.selected.length==1){
          this.pop(['禁用',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.customerImageTableDatas.selected);
      },
      qiyong(){
        if(this.customerImageTableDatas.selected.length==1){
          this.pop(['启用',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun(){
        console.log(this.customerImageTableDatas.selected);
      },
      zhipai(){
        if(this.customerImageTableDatas.selected.length==1){
          this.pop(['指派',this.pop3])
        }else{
          alert('请仅选择一项')
        }
      },
      pop3fun(){
        console.log(this.customerImageTableDatas.selected);
      },
      tianjia(){
          this.pop(['添加',this.pop4])
      },
      pop4fun(){
        console.log(this.customerImageTableDatas.selected);
      },
      jiandan(){
        if(this.customerImageTableDatas.selected.length==1){
          this.pop(['简单',this.pop5])
        }else{
          alert('请仅选择一项')
        }
      },
      pop5fun(){
        console.log(this.customerImageTableDatas.selected);
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
        this.customerImageTableDatas.selected=[];
        this.customerImageTableDatas.keyword=''
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

