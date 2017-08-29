<template>
  <div class="anclear ">
    <p class="describe">
      <strong>SDN用户申请管理 ( account ) </strong>.......
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="applyList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh" >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button  @click="huajia" >
              <i class="iconfont icon-jihua"></i>
              划价
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="fenpeiduankou"  >
              <i class="iconfont icon-fenpei1"></i>
              分配端口
            </el-button>
          </li>
          <li class="fl">
            <el-button  @click="deleteLine" >
              <i class="iconfont icon-chuyidong1"></i>
              删除
            </el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="applyList.hasSearch">
          <el-input class="fl shaixuanbox" v-model="applyList.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(applyList)" >搜索</el-button>
        </div>

        <div class="anclear fl fastSearch">
          <!--<el-radio-group v-model="radio2" @change="fastSearch">--><!--官方推荐-->
          <el-radio-group v-model="radio2" @click.native="fastSearch(radio2)"><!--自己写的-->

            <el-radio :label="''">全部</el-radio>
            <el-radio :label="'已开通'">已开通</el-radio>
            <el-radio :label="'未分配'">未分配</el-radio>
            <el-radio :label="'未缴费'">未缴费</el-radio>
            <el-radio :label="'未划价'">未划价</el-radio>
          </el-radio-group>
        </div>


      </div>
      <!-- 日期 -->
      <div class="anclear fl dateSearch">
        <el-date-picker class="shaixuanbox" v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
                        placeholder="选择时间范围" align="left" @change="getDates({filterData:applyList,value4})">
        </el-date-picker>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="applyList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=applyList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=applyList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="id" label="标题" width="60" fixed></el-table-column>
        <el-table-column  prop="account" label="用户"></el-table-column>
        <el-table-column  prop="registerTime" label="申请时间" width="110px"></el-table-column>
        <el-table-column  prop="email" label="申请内容"></el-table-column>
        <el-table-column  prop="form" label="是否专线" width="100"></el-table-column>
        <el-table-column  prop="mobilePhone" label="联系人"></el-table-column>
        <el-table-column  prop="componey" label="联系方式"></el-table-column>
        <el-table-column  prop="address" label="初装费" width="200"></el-table-column>
        <el-table-column  prop="phone" label="状态"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="applyList"></fenYe>
      </div>
    </div>

    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
           <div>用户：</div>
            <div>{{applyList.selected[0].id}}</div>
          </li>
          <li>
            <div>SDN开通申请单ID：</div>
            <div>47</div>
          </li>
          <li>
            <div>请填写端口初装费用：</div>
            <div><input type="text"></div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle"  :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>用户：</div>
            <div>{{applyList.selected[0].id}}</div>

          </li>
          <li>
            <div>SDN开通申请单ID：</div>
            <div>53</div>
          </li>
          <li>
            <div>该申请尚未划价！</div>
            <div></div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop3.popTitle"  :itemss="pop3" >
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
      ['applyList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),
      fastSearch(res){
        this.applyList.keyword=res;
        this.searchFilter(this.applyList);
      },
//点击划价
      huajia(){
//        console.log(this.applyList.selected);
        if(this.applyList.selected.length==1){
          this.pop(['划价',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){//对划价进行的一系列的操作
       console.log(this.applyList.selected);
       console.log('dianjile hua jia');
      },
//点击分配端口
      fenpeiduankou(){
        if(this.applyList.selected.length==1){
          this.pop(['分配端口',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun(){
        console.log(this.applyList.selected);
      },
//点击删除
      deleteLine(){
        if(this.applyList.selected.length==1){
          this.pop(['删除',this.pop3])
        }else{
          alert('请仅选择一项')
        }
      },
      pop3fun(){
        for(var i=0;i<this.applyList.tableData.length;i++){
          if(JSON.stringify(this.applyList.tableData[i])==JSON.stringify(this.applyList.selected[0])){
            this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.applyList.tableData[i],false);
            this.applyList.tableData.splice(i,1);
          }else{}
        };
        this.searchFilter(this.applyList);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.applyList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.applyList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.applyList.selected=[];
        this.applyList.keyword=''
      })
    },



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

