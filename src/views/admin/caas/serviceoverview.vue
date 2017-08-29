<template>
 <div>
   <p class="describe">
     <strong>CAAS划价</strong>
   </p>
   <div class="anclear fl tableSearch" v-show="serviceSwitchPortList.hasSearch">
     <div></div><el-input class="fl shaixuanbox" v-model="serviceSwitchPortList.keyword" placeholder="EXCEL计算单ID" style="display: inline-block"  ></el-input>
   </div>
     <div><el-select v-model="value" placeholder="请选择">
       <el-option
         v-for="item in options"
         :key="item.value"
         :label="item.label"
         :value="item.value">
       </el-option>
     </el-select>
     </div>
   <div>
     <el-button class="fr"  type="primary" icon="search" @click="searchFilter(serviceSwitchPortList)" >查询</el-button>
   </div>
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
        value:'',
        options: [{
          value: '选项1',
          label: '互联网接入'
        }, {
          value: '选项2',
          label: '专线业务'
        }, {
          value: '选项3',
          label: '语音业务'
        },],
      }
    },
    computed:mapGetters(
      ['serviceSwitchPortList']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage']
      ),

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
      allRes.datas=this.serviceSwitchPortList;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.serviceSwitchPortList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
      })
    }



  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
