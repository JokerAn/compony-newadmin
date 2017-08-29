<template>
  <div class="anclear ">
    <p class="describe">
      <strong>Node管理 </strong>负责Node的创建及删除
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="nodeList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"   >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="chuangjian"   >
              <i class="iconfont icon-chuangjian1"></i>
              创建</el-button>
          </li>
          <li class="fl">
            <el-button @click="shanchu"   >
              <i class="iconfont icon-chuyidong1"></i>
              删除</el-button>
          </li>


        </ul>
        <div class="anclear fl tableSearch" v-show="nodeList.hasSearch">
          <el-input class="fl" v-model="nodeList.keyword" placeholder="node相关内容" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(nodeList)" >搜索</el-button>
        </div>
      </div>

      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="nodeList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=nodeList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=nodeList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="Node ID"></el-table-column>
        <el-table-column  prop="registerTime" label="交换机端口" width="110px"></el-table-column>
        <el-table-column  prop="email" label="Node名称"></el-table-column>
        <el-table-column  prop="form" label="IP" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="子网掩码"></el-table-column>
        <el-table-column  prop="componey" label="VLAN ID"></el-table-column>
        <el-table-column  prop="address" label="所属客户" width="200"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="nodeList"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
        <li>
        <div>Node名称：</div>
        <div><el-input  placeholder="请输入内容"></el-input></div>
        </li>
        <li>
          <div>客户：</div>
          <div><el-input  placeholder="请输入内容"></el-input></div>
        </li>
        <li>
          <div>用户端口：</div>
          <div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </li>
        <li>
          <div>选择端口类型：</div>
          <div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </li>
        <li>
          <div>IP地址：</div>
          <div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle"  :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <p style="text-align: center">确定删除?</p>
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
        value:'',
        options1:[{value:'',label:''}],
        options3:[{value:'',label:''}],
        options2: [{
          value: '选项1',
          label: 'IP'
        }, {
          value: '选项2',
          label: 'VALN'
        }, {
            value: '选项3',
            label: '端口直连'
          }],
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
      ['nodeList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),
      fastSearch(res){
        this.nodeList.keyword=res;
//        console.log(res)
        this.searchFilter(this.nodeList);
      },
      chuangjian(){
        if(this.nodeList.selected.length==1){
          this.pop(['创建',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.nodeList.selected);
      },
      shanchu(){
        if(this.nodeList.selected.length==1){
          this.pop(['删除',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun() {
        for (var i = 0; i < this.nodeList.tableData.length; i++) {
          if (JSON.stringify(this.nodeList.tableData[i]) == JSON.stringify(this.nodeList.selected[0])) {
            this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.nodeList.tableData[i], false);
            this.nodeList.tableData.splice(i, 1);
          } else {
          }
        }
        ;
        this.searchFilter(this.nodeList);
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
      allRes.datas=this.nodeList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.nodeList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.nodeList.selected=[];
        this.nodeList.keyword=''
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

