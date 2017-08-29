<template>
  <div class="anclear ">
<!--按钮组-->
    <ButtonGroup :button="customerImageTableDatas.buttons"></ButtonGroup>
    <div class="anclear fl tableSearch" v-show="customerImageTableDatas.hasSearch">
      <el-input class="fl" v-model="customerImageTableDatas.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
      <el-button class="fr"  type="primary" icon="search" @click="searchFilter(customerImageTableDatas)" >搜索</el-button>
    </div>
<!--表格-->
    <TablesData :tableDatas="customerImageTableDatas"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

      <el-table-column  v-if=customerImageTableDatas.inputIndex type="index" lable="列" width="50"></el-table-column>
      <el-table-column v-if=customerImageTableDatas.inputSection type="selection"   width="50"></el-table-column>
      <el-table-column  prop="id" label=" "></el-table-column>
      <el-table-column  prop="name" label=" "></el-table-column>
      <el-table-column  prop="name" label=" "></el-table-column>
      <el-table-column  prop="date" label=" "></el-table-column>
      <el-table-column  prop="name" label=" "></el-table-column>
      <el-table-column  prop="address" label=" "></el-table-column>
      <el-table-column v-if="customerImageTableDatas.editTable"  label=" " width="180">
        <template scope="scope" >
          <el-button  size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete( scope)">删除</el-button>
        </template>
      </el-table-column>

    </TablesData>
<!--分页-->
    <div class="table-pagination fr">
      <fenYe :feYeData="customerImageTableDatas"></fenYe>
    </div>
  </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {}
    },
    computed:mapGetters(
     ['customerImageTableDatas']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData']
      ),

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages';
      allRes.datas=this.customerImageTableDatas;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.customerImageTableDatas);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
      })
    }



  }
</script>
<style>

  .tableSearch .el-input{
    width:240px
  }

  .tableSearch input{
    width:220px;
  }
</style>
