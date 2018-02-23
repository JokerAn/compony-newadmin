<template>
  <div class="anclear ">
    <!--按钮组-->
    <!--<ButtonGroup  ref="button1" :button="customerImageTableDatas.buttons" @click.native="afff" ></ButtonGroup>-->


    <ul class="anclear fl button-pop">
      <li class="fl">
        <el-button @click="refresh"   :icon='customerImageTableDatas.buttons[0].icon'  >{{customerImageTableDatas.buttons[0].name}}</el-button>
      </li>
      <li class="fl">
        <el-button @click="jinyong"   :icon='customerImageTableDatas.buttons[1].icon'  >{{customerImageTableDatas.buttons[1].name}}</el-button>
      </li>
      <li class="fl">
        <el-button @click="qiyong"   :icon='customerImageTableDatas.buttons[2].icon'   >{{customerImageTableDatas.buttons[2].name}}</el-button>
      </li>

    </ul>
    <div class="anclear fl tableSearch" v-show="customerImageTableDatas.hasSearch">
      <el-input class="fl" v-model="customerImageTableDatas.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
      <el-button class="fr"  type="primary" icon="search" @click="searchFilter(customerImageTableDatas)" >搜索</el-button>
    </div>

    <!--表格-->
    <TablesData ref="multipleTable2" :tableDatas="customerImageTableDatas" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

      <el-table-column  v-if=customerImageTableDatas.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
      <el-table-column v-if=customerImageTableDatas.inputSection type="selection" fixed width="50"></el-table-column>
      <el-table-column  prop="id" label="ID" width="60" fixed></el-table-column>
      <el-table-column   label="状态" width="70">
        <template scope="scope" >
          <el-button type="text" >{{scope.row.type}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="130">
        <template scope="scope" >
          <el-button type="text" >{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column  prop="account" label="账户"></el-table-column>
      <el-table-column  prop="customerOwner" label="客户归属人"></el-table-column>
      <el-table-column  prop="email" label="邮箱"></el-table-column>
      <el-table-column  prop="form" label="来源" width="80"></el-table-column>
      <el-table-column  prop="mobilePhone" label="手机"></el-table-column>
      <el-table-column  prop="componey" label="公司"></el-table-column>
      <el-table-column  prop="address" label="地址" width="200"></el-table-column>
      <el-table-column  prop="phone" label="电话"></el-table-column>
      <el-table-column  prop="industry" label="行业"></el-table-column>
      <el-table-column  prop="registerTime" label="注册时间" width="150"></el-table-column>
      <el-table-column v-if="customerImageTableDatas.editTable"  label="认证" width="80">
        <template scope="scope" >
          <el-button type="text"  size="small" @click="handleEdit(scope)" >{{scope.row.renzheng}}</el-button>
        </template>
      </el-table-column>

    </TablesData>
    <!--分页-->
    <div class="table-pagination fr">
      <fenYe ref="asdf" :feYeData="customerImageTableDatas"></fenYe>
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
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh']
      ),
      jinyong(){
        if(this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection.length==1){
          console.log(this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection[0]);//table被选中的集合

//        this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.customerImageTableDatas.tableData[0],true);
          this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection[0].type='禁用'
        }else{
          alert('请仅选择一项')
        }
//        console.log(this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection);//table被选中的集合
      },
      qiyong(){
        if(this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection.length==1){
          console.log(this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection[0]);//table被选中的集合

//        this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.customerImageTableDatas.tableData[0],true);
          this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection[0].type='启用'
        }else{
          alert('请仅选择一项')
        }
//        console.log(this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection);//table被选中的集合
      },
      afff:function(e){
        console.log(123);
        console.log($(this));
//        console.log(e.target);
//        console.log(e.currentTarget);
         }

    },

    created:function(){
      var allRes={};
      allRes.url='https://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
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
