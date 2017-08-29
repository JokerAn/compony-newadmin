<template>
  <div class="anclear ">
    <!--按钮组-->
    <ButtonGroup :button="testTableDatas.buttons"></ButtonGroup>
    <div class="anclear fl tableSearch" v-show="testTableDatas.hasSearch">
      <el-input class="fl" v-model="testTableDatas.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
      <el-button class="fr"  type="primary" icon="search" @click="searchFilter(testTableDatas)" >搜索</el-button>
    </div>
    <!--表格-->
    <TablesData :tableDatas="testTableDatas"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

      <el-table-column  v-if=testTableDatas.inputIndex type="index" lable="列" width="50"></el-table-column>
      <el-table-column v-if=testTableDatas.inputSection type="selection"   width="50"></el-table-column>
      <el-table-column  prop="id" label="服务名称"></el-table-column>
      <el-table-column  prop="name" label="类型"></el-table-column>
      <el-table-column  prop="name" label="状态"></el-table-column>
      <el-table-column  prop="date" label="创建时间"></el-table-column>
      <el-table-column  prop="name" label="已消费金额"></el-table-column>
      <el-table-column  prop="address" label="说明"></el-table-column>
      <el-table-column v-if="testTableDatas.editTable"  label="操作" width="180">
        <template scope="scope" >
          <el-button  size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope )">删除</el-button>
        </template>
      </el-table-column>

    </TablesData>
    <!--分页-->
    <div class="table-pagination fr">
      <fenYe :feYeData="testTableDatas"></fenYe>
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
      ['testTableDatas']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete']
      ),
    },
    created:function(){

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.testTableDatas);
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
