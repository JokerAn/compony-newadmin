<template>
  <div class="anclear ">
    <p class="describe">
      <strong>用户账号认证  </strong>
    </p>
    <div class="anclear fff ancontent" >
      <ul class="anclear fl button-pop">
        <li class="fl">
          <el-button @click="refresh"  >
            <i class="iconfont icon-shuaxin1"></i>
          </el-button>
        </li>
      </ul>
      <div class="anclear fl dateSearch">
        合作伙伴:
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="anclear fff ancontent" >
      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="verify" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=verify.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="id"></el-table-column>
        <el-table-column  prop="registerTime" label="联系人" width="110px"></el-table-column>
        <el-table-column  prop="email" label="身份证号"></el-table-column>
        <el-table-column  prop="form" label="状态" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="操作"></el-table-column>
      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="verify"></fenYe>
      </div>
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
        options: [{
          value: '选项1',
          label: '恶魔小丑'
        }, {
          value: '选项2',
          label: '测试特制'
        }, {
          value: '选项3',
          label: '测试特制合作伙伴1'
        }, {
          value: '选项4',
          label: '测试特制合作伙伴2'
        }, ],
        value: '恶魔小丑',
      }
    },
    computed:mapGetters(
      ['verify']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage',]
      ),
      fastSearch(res){
        this.verify.keyword=res;
//        console.log(res)
        this.searchFilter(this.verify);
      },

      jinyong(){
//        this.verify.selected=this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection;
//        console.log(this.verify.selected)
        if(this.verify.selected.length==1){
//          console.log(this.verify.selected[0]);//table被选中的集合

//        this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.verify.tableData[0],true);
          this.verify.selected[0].type='禁用'
        }else{
          alert('请仅选择一项')
        }
//        console.log(this.verify.selected);//table被选中的集合
      },

      qiyong(){
        if(this.verify.selected.length==1){
          this.verify.selected[0].type='启用'
        }else{
          alert('请仅选择一项')
        }
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
      allRes.datas=this.verify;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.verify);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
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

