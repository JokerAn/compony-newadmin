<template>
  <el-pagination
    @size-change="handleSizeChange" @current-change="handleCurrentChange"
    :current-page="feYeData.fenYe.currentPage"
    :page-sizes="feYeData.fenYe.coline" :page-size="feYeData.fenYe.onePageNum"
    layout="total, sizes, prev, pager, next, jumper"
    :total="feYeData.fenYe.allColine">
  </el-pagination>
</template>
<script>

  import {mapGetters,mapActions} from 'vuex'
  export default{
    props:['feYeData'],
    methods:{
      ...mapActions(
        ['searchFilter']
      ),
      handleSizeChange(val) {
        if(val==undefined){
          val=this.feYeData.fenYe.coline[0];
        }
        this.feYeData.fenYe.onePageNum=val;
        this.searchFilter(this.feYeData);
      },
      handleCurrentChange(val) {
        this.feYeData.fenYe.currentPage=val;
        this.searchFilter(this.feYeData);
      },
      getAllColine(res){
        this.feYeData.fenYe.allColine=res.length;
      },
    },
    created:function(){

      this.getAllColine(this.feYeData.tableData);//一共多少条数据
      this.handleSizeChange();

    },
  }
</script>
<style>
  .button-pop li{
    margin: 10px 5px;
  }
  .button-pop li button{
    background-color: #324157;
    color: #fff;
  }
</style>
