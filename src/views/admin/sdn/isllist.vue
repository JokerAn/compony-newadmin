<template>
  <div class="anclear ">
    <p class="describe">
      <strong>ISL管理 </strong>负责交换机链路管理
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="islList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"  >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="bianji"    >
              <i class="iconfont icon-xiugai"></i>
              编辑</el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="islList.hasSearch">
          <el-input class="fl" v-model="islList.keyword" placeholder="ISL名称,描述" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(islList)" >搜索</el-button>
        </div>
      </div>
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="islList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=islList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=islList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="名称"></el-table-column>
        <el-table-column  prop="registerTime" label="描述" width="110px"></el-table-column>
        <el-table-column  prop="email" label="成本(1~1000)"></el-table-column>
        <el-table-column  prop="form" label="最大预留(0%~100%)" width="200"></el-table-column>
        <el-table-column  prop="mobilePhone" label="是否仅允许独享特制桥"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="islList"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli islist">
          <li >
            <div>名称：</div>
            <div class="marg5">{{islList.selected[0].id}}</div>
          </li>
          <li>
            <div>描述：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>成本(1~1000)：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li>
            <div>最大预留(0~100)：</div>
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </li>
          <li >
            <div>仅独享：</div>
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
        options1: [{
          value: '选项1',
          label: '是'
        }, {
          value: '选项2',
          label: '否'
        },],
        value1:'',
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
      ['islList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.islList.keyword=res;
//        console.log(res)
        this.searchFilter(this.islList);
      },
      bianji(){
        if(this.islList.selected.length==1){
          this.pop(['编辑',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log(this.islList.selected);
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
      allRes.datas=this.islList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.islList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.islList.selected=[];
        this.islList.keyword='';
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

