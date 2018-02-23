<template>
  <div class="anclear ">
    <p class="describe">
      <strong>用户端口管理 (port) </strong> 负责将交换机物理端口分配给用户并指定带宽
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="userSwitchPortList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"    >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="zhipai"    >
              <i class="iconfont icon-fenpei"></i>
              指派给客户</el-button>
          </li>
          <li class="fl">
            <el-button @click="bianji"  >
              <i class="iconfont icon-xiugai"></i>
              编辑</el-button>
          </li>
          <li class="fl">
            <el-button @click="huishou"   >
              <i class="iconfont icon-revert"></i>
              回收</el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="userSwitchPortList.hasSearch">
          <el-input class="fl" v-model="userSwitchPortList.keyword" placeholder="端口描述" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(userSwitchPortList)" >搜索</el-button>
        </div>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="userSwitchPortList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=userSwitchPortList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=userSwitchPortList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="端口ID"></el-table-column>
        <el-table-column  prop="registerTime" label="描述" ></el-table-column>
        <el-table-column  prop="email" label="交换机"></el-table-column>
        <el-table-column  prop="form" label="端口" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="端口状态" width="100"></el-table-column>
        <el-table-column  prop="componey" label="所属用户" width="100"></el-table-column>
        <el-table-column  prop="address" label="端口类型" width="100"></el-table-column>
        <el-table-column  prop="phone" label="所属CACTI线路编号" width="130"></el-table-column>
        <el-table-column  prop="phone" label="标签"></el-table-column>
        <el-table-column  prop="phone" label="分配时间"width="100"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="userSwitchPortList"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli">
          <li >
            <div>客户：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>位置：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>端口：</div>
            <div class="duankou">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li>
            <div>是否专线：</div>
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
            <div>CACTI线路编号：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>标签：</div>
            <div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容">
              </el-input>
            </div>
          </li>
          <li >
            <div>用户联系人姓名：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>用户联系人电话：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>申请内容：</div>
            <div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容">
              </el-input>
            </div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle"  :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli">
          <li>
            <div>端口：</div>
            <div style="margin-left: 28px;">{{userSwitchPortList.selected[0].id}}</div>
          </li>
          <li>
            <div style="width: 130px;">所属CACTI线路编号：</div>
            <div><el-input  placeholder="请输入内容"></el-input></div>
          </li>
          <li >
            <div>标签：</div>
            <div style="margin-left: 22px;">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容">
              </el-input>
            </div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop3.popTitle"  :itemss="pop3" >
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
        options1: [{
          value: '选项1',
          label: '是'
        }, {
          value: '选项2',
          label: '否'
        },],
        value:'',
        value1:'',
        options:'',
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
      ['userSwitchPortList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),
      fastSearch(res){
        this.userSwitchPortList.keyword=res;
//        console.log(res)
        this.searchFilter(this.userSwitchPortList);
      },

      zhipai(){
        if(this.userSwitchPortList.selected.length==1){
          this.pop(['指派给客户',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.userSwitchPortList.selected);
      },
      bianji(){
        if(this.userSwitchPortList.selected.length==1){
          this.pop(['编辑',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun(){
        console.log(this.userSwitchPortList.selected);
      },
      huishou(){
        if(this.userSwitchPortList.selected.length==1){
          this.pop(['回收',this.pop3])
        }else{
          alert('请仅选择一项')
        }
      },
      pop3fun(){
        for(var i=0;i<this.userSwitchPortList.tableData.length;i++){
          if(JSON.stringify(this.userSwitchPortList.tableData[i])==JSON.stringify(this.userSwitchPortList.selected[0])){
            this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.userSwitchPortList.tableData[i],false);
            this.userSwitchPortList.tableData.splice(i,1);
          }else{}
        };
        this.searchFilter(this.userSwitchPortList);
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
      allRes.datas=this.userSwitchPortList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.userSwitchPortList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.userSwitchPortList.selected=[];
        this.userSwitchPortList.keyword='';
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

