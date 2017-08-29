<template>
  <div class="anclear ">
    <p class="describe">
      云平台工单     故障工单
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="vipWorkOrderManagement.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh"  >
              <i class="iconfont icon-shuaxin1 symbol"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button  @click="xinjian" >
              <i class="iconfont icon-chuangjian1 symbol"></i>
              新建工单
            </el-button>
          </li>
        </ul>
        <div class=" anclear fl tableSearch" v-show="vipWorkOrderManagement.hasSearch">
          <el-input class="fl shaixuanbox" v-model="vipWorkOrderManagement.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(vipWorkOrderManagement)" >搜索</el-button>
        </div>
      </div>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="vipWorkOrderManagement"></fenYe>
      </div>
    </div>

    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <p>新建工单</p>
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
      ['vipWorkOrderManagement']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),
      fastSearch(res){
        this.vipWorkOrderManagement.keyword=res;
        this.searchFilter(this.vipWorkOrderManagement);
      },
//点击划价
      xinjian(){
          this.pop(['新建工单',this.pop1])
      },
      pop1fun(){//对划价进行的一系列的操作
        console.log(this.vipWorkOrderManagement.selected);
        console.log('dianjile hua jia');
      },
    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.vipWorkOrderManagement;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.vipWorkOrderManagement);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.vipWorkOrderManagement.selected=[];
        this.vipWorkOrderManagement.keyword=''
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


