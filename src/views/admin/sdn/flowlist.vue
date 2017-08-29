<template>
  <div class="anclear ">
    <p class="describe">
      <strong>云桥管理 (flow) </strong>负责云桥的相关业务
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="flowList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"  >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="chuangjian" >
              <i class="iconfont icon-chuangjian1"></i>
              创建</el-button>
          </li>
          <li class="fl">
            <el-button @click="tiaozheng"   >
              <i class="iconfont icon-guanli4"></i>
              调整带宽</el-button>
          </li>
          <li class="fl">
            <el-button @click="xiugai"   >
              <i class="iconfont icon-xiugai"></i>
              修改描述</el-button>
          </li>
          <li class="fl">
            <el-button @click="kaishi"   >
              <i class="iconfont icon-kaishi"></i>
              开始计费</el-button>
          </li>
          <li class="fl">
            <el-button @click="duxiang"  >
              <i class="iconfont icon-fenpei1"></i>
              独享/共享切换</el-button>
          </li>
          <li class="fl">
            <el-button @click="chongxin"  >
              <i class="iconfont icon-jihua"></i>
              重新连接</el-button>
          </li>
          <li class="fl">
            <el-button @click="shanchu"   >
              <i class="iconfont icon-chuyidong1"></i>
              删除</el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="flowList.hasSearch">
          <el-input class="fl" v-model="flowList.keyword" placeholder="flow相关描述" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(flowList)" >搜索</el-button>
        </div>
      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:flowList,value4})">
        </el-date-picker>
      </div>
      <div class="anclear fl  tableSearch">
        <el-button class="fl" type="text" style="color: #666;">客户: </el-button><el-input class="fl"  style="display: inline-block;margin-left:10px;"   ></el-input>

      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="flowList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=flowList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=flowList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="名称"></el-table-column>
        <el-table-column  prop="registerTime" label="描述" width="110px"></el-table-column>
        <el-table-column  prop="email" label="所属用户" width="100"></el-table-column>
        <el-table-column  prop="form" label="所属销售"  width="100"></el-table-column>
        <el-table-column  prop="mobilePhone" label="源节点"></el-table-column>
        <el-table-column  prop="componey" label="源节点VLAN"  width="100"></el-table-column>
        <el-table-column  prop="address" label="目标节点" width="100"></el-table-column>
        <el-table-column  prop="phone" label="目标节点VLAN"  width="200"></el-table-column>
        <el-table-column  prop="phone" label="最大带宽"  width="100"></el-table-column>
        <el-table-column  prop="phone" label="建立时间"  width="100"></el-table-column>
        <el-table-column  prop="phone" label="计费状态"  width="100"></el-table-column>
        <el-table-column  prop="phone" label="计费开始时间"  width="120"></el-table-column>
        <el-table-column  prop="phone" label="标签"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="flowList"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>流名称：</div>
            <div><el-input  placeholder="请输入内容"></el-input></div>
          </li>
          <li >
            <div>客户：</div>
            <div><el-input  placeholder="请输入内容"></el-input></div>
          </li>
          <li >
            <div>描述：</div>
            <div><el-input  placeholder="请输入内容"></el-input></div>
          </li>
          <li >
            <div>标签：</div>
            <div><el-input  placeholder="请输入内容"></el-input></div>
          </li>
          <li >
            <div>源节点：</div>
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
          <li >
            <div>目标节点：</div>
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
          <li >
            <div>带宽类型：</div>
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
          <li >
            <div>是否计费：</div>
            <div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>最大带宽：</div>
            <div><el-input  placeholder="10"></el-input></div>
          </li>
          <li >
            <div>QoS：</div>
            <div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options5"
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
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <p>调整带宽</p>
    </Pop>
    <Pop v-if="pop3.popTitle" :itemss="pop3" >
      <p>修改描述</p>
    </Pop>
    <Pop v-if="pop4.popTitle" :itemss="pop4" >
      <p>开始计费</p>
    </Pop>
    <Pop v-if="pop5.popTitle" :itemss="pop5" >
      <p>独享/共享切换</p>
    </Pop>
    <Pop v-if="pop6.popTitle" :itemss="pop6" >
      <p>重新连接</p>
    </Pop>
    <Pop v-if="pop7.popTitle" :itemss="pop7" >
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
        value:'',
        options1:'',
        options2:'',
        options3:[{
          value: '选项1',
          label: '共享'
        },{
          value: '选项1',
          label: '独享'
        }],
        options4:[{
          value: '选项1',
          label: '计费'
        },{
          value: '选项1',
          label: '不计费'
        }],
        options5:[{
          value: '选项1',
          label: '商务速通独享带宽-10.0'
        },],

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
        pop7:{
          popTitle:'',
          numTop:'',
          fun:this.pop7fun
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
      ['flowList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.flowList.keyword=res;
//        console.log(res)
        this.searchFilter(this.flowList);
      },
      chuangjian(){
        if(this.flowList.selected.length==1){
          this.pop(['创建',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.flowList.selected);
      },
      tiaozheng(){
        if(this.flowList.selected.length==1){
          this.pop(['调整带宽',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun(){
        console.log(this.flowList.selected);
      },
      xiugai(){
        if(this.flowList.selected.length==1){
          this.pop(['修改描述',this.pop3])
        }else{
          alert('请仅选择一项')
        }
      },
      pop3fun(){
        console.log(this.flowList.selected);
      },
      kaishi(){
        if(this.flowList.selected.length==1){
          this.pop(['开始计费',this.pop4])
        }else{
          alert('请仅选择一项')
        }
      },
      pop4fun(){
        console.log(this.flowList.selected);
      },
      duxiang(){
        if(this.flowList.selected.length==1){
          this.pop(['独享/共享切换',this.pop5])
        }else{
          alert('请仅选择一项')
        }
      },
      pop5fun(){
        console.log(this.flowList.selected);
      },
      chongxin(){
        if(this.flowList.selected.length==1){
          this.pop(['重新连接',this.pop6])
        }else{
          alert('请仅选择一项')
        }
      },
      pop6fun(){
        console.log(this.flowList.selected);
      },
      shanchu(){
        if(this.flowList.selected.length==1){
          this.pop(['删除',this.pop7])
        }else{
          alert('请仅选择一项')
        }
      },
      pop7fun(){
        console.log(this.flowList.selected);
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
      allRes.datas=this.flowList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.flowList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.flowList.selected=[];
        this.flowList.keyword=''
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

