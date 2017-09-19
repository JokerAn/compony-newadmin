<template>
  <div class="anclear ">
    <p class="describe">
      <strong>物理交换机管理 ( account ) </strong>负责交换机拓扑发现、业务信息标注等业务
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="switchList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh" >
              <i class="iconfont icon-shuaxin1"></i>
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="faxian" >
              <i class="iconfont icon-faxian"></i>
              发现
            </el-button>
          </li>
          <li class="fl">
            <el-button @click="bianji"  >
              <i class="iconfont icon-xiugai"></i>
              编辑
            </el-button>
            <el-button @click="tihuan">
              <i class="iconfont icon-55"></i>
              替换
            </el-button>
          </li>

        </ul>
        <div class="anclear fl tableSearch" v-show="switchList.hasSearch">
          <el-input class="fl shaixuanbox" v-model="switchList.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
          <el-button class="fr"  type="primary" icon="search" @click="searchFilter(switchList)" >搜索</el-button>
        </div>
      </div>

      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="switchList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=switchList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=switchList.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="id" label="位置" fixed></el-table-column>
        <el-table-column  prop="account" label="名称"></el-table-column>
        <el-table-column  prop="customerOwner" label="描述"></el-table-column>
        <el-table-column  prop="email" label="编号"></el-table-column>
        <el-table-column v-if="switchList.editTable"  label="操作" >
          <template scope="scope" >
            <el-button   size="small" @click="handleEdit(scope)" >发现端口</el-button>
          </template>
        </el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="switchList"></fenYe>
      </div>
    </div>

    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli wljhj">
          <li >
            <div>用户：</div>
            <div class="marg5">{{switchList.selected[0].id}}</div>

          </li>
          <li>
            <div>SDN开通申请单ID：</div>
            <div class="marg5">47</div>
          </li>
          <li>
            <div>请填写端口初装费用：</div>
            <div>
              <el-input placeholder=""></el-input>
            </div>
          </li>
        </ul>
      </div>
    </Pop>



    <Pop v-if="pop2.popTitle"  :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170 duankouguanli">
          <li >
            <div>用户：</div>
            <div>{{switchList.selected[0].id}}</div>

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
            <p style="text-align: center">确定替换?</p>
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
      }
    },
    computed:mapGetters(
      ['switchList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','pop']
      ),
      fastSearch(res){
        this.switchList.keyword=res;
        this.searchFilter(this.switchList);
      },

      faxian(){
        if(this.switchList.selected.length==1){
          this.pop(['发现',this.pop1])
        }else{
          alert('请仅选择一项')
        }
      },
      pop1fun(){
        console.log('点击的---发现')
      },

      bianji(){
        if(this.switchList.selected.length==1){
          this.pop(['编辑',this.pop2])
        }else{
          alert('请仅选择一项')
        }
      },
      pop2fun(){
        console.log('点击的---编辑')
      },

      tihuan(res){
        if(this.switchList.selected.length==1){
          this.pop(['替换',this.pop3])
        }else{
          alert('请仅选择一项')
        }
      },
      pop3fun(){
        console.log('点击的---替换')
      },

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.switchList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.switchList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
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

