<template>
  <div>

    <el-table @row-click="ass" :show-summary=tableDatas.toTal  ref="multipleTable" @select="select"  :data="tableDatas.lastShowData" border  class="an-table" ><slot></slot></el-table>
        <!--<el-table @row-click="ass"                      @select="select"  :data="tableDatas.lastShowData" border  class="an-table" ><slot></slot></el-table>-->

  </div>
</template>


<script>
  //  import TableContent from './tableContent'

  export default {
    props:['tableDatas'],
    data() {
      return {
      }
    },
    components:{

    },
    methods: {
      ass(row, event, column){//点击一行的时候
//        console.log(row);
//        console.log(event);
//        console.log(column);
      },
      select(scope,a){//点击input选择框的时候
        this.tableDatas.selected=this.$refs.multipleTable.store.states.selection;
//        console.log(scope);
//        console.log(this.tableDatas.selected);//被选中的数据都在这个数组中
//        console.log(this.$refs.multipleTable.store);//这个里面的东西很有用
      },
    },
    computed:{

    },
    created:function(){

    },
    mounted:function () {
    }

  }
</script>
<style>
  .an-table{
    font-size: 12px;
  }

  .tableSearch .el-input{
    width:240px
  }

  .tableSearch input{
    width:220px;
  }
</style>
