<template>
  <div class="anclear ">
    <p class="describe">
      <strong>指派计价策略 </strong>
    </p>
    <div class="ancontent fff anclear">
      <div class=" anclear ">
        <div class="anclear fl tableSearch" v-show="assignedPriceStrategy.hasSearch">
          <el-input class="fr shaixuanbox" v-model="assignedPriceStrategy.keyword" placeholder="筛选关键词" style="display: inline-block;margin-left: 20px"  ></el-input>
          <el-button class="fl btn-black"  icon="search" @click="searchFilter(assignedPriceStrategy)" >检索</el-button>
        </div>
      </div>


      <TablesData :tableDatas="assignedPriceStrategy"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=assignedPriceStrategy.inputIndex type="index" lable="列" width="50"></el-table-column>
        <el-table-column v-if=assignedPriceStrategy.inputSection type="selection"   width="50"></el-table-column>
        <el-table-column  prop="basepriceid" label="用户名 " width="60"></el-table-column>
        <el-table-column  prop="baseprice" label=" 用户昵称"></el-table-column>
        <el-table-column  prop="priceUnit.unitname" label="企业名称 "></el-table-column>
        <el-table-column  prop="priceQOS.qosname" label="联系电话 "></el-table-column>
        <el-table-column  prop="objectType" label="已绑定 "></el-table-column>
        <el-table-column v-if="assignedPriceStrategy.editTable"  label="操作 " width="180">
          <template scope="scope" >
            <el-button class="btn-blackhover"  size="small" @click="handleEdit(scope)">修改绑定</el-button>
          </template>
        </el-table-column>

      </TablesData>

      <div class="table-pagination fr">
        <fenYe :feYeData="assignedPriceStrategy"></fenYe>
      </div>

    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li>
            <div>当前计价策略：</div>
            <div></div>
          </li>
          <li>
            <div>指派计价策略：</div>
            <div></div>
          </li>
          <li>
            <div><el-button>选择计价策略</el-button></div>
            <div></div>
          </li>

        </ul>
      </div>
    </Pop>

  </div>



</template>


<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
      }
    },
    computed:mapGetters(
      ['assignedPriceStrategy']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData']
      ),
      handleEdit(){
        this.pop(['新增',this.pop1]);
      },
      pop1fun(){
        console.log(this.assignedPriceStrategy.selected);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='https://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/jjgl';
      allRes.datas=this.assignedPriceStrategy;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.assignedPriceStrategy);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.assignedPriceStrategy.selected=[];
        this.assignedPriceStrategy.keyword='';
      })
    }



  }
</script>
<style scoped>
  .tableSearch {
    margin: 10px 0;
  }
</style>
