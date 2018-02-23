<template>
  <div class="anclear ">
    <p class="describe">
      <strong>告警 ( warning ) </strong>所有特制平台余额不足以及欠费的告警客户
    </p>
    <div class="anclear fff ancontent" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="wCustomer.buttons" ></ButtonGroup>-->
      <div class="anclear ">
        <ul class="anclear fl button-pop">
          <li class="fl">
            <el-button @click="refresh" >
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


      <!--表格-->
      <TablesData class="an-table" ref="multipleTable2" :tableDatas="wCustomer" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=wCustomer.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
        <el-table-column v-if=wCustomer.inputSection type="selection" fixed width="50"></el-table-column>
        <el-table-column  prop="account" label="状态"></el-table-column>
        <el-table-column  prop="registerTime" label="昵称" width="110px"></el-table-column>
        <el-table-column  prop="email" label="用户邮箱"></el-table-column>
        <el-table-column  prop="form" label="手机" width="80"></el-table-column>
        <el-table-column  prop="mobilePhone" label="公司名称"></el-table-column>
        <el-table-column  prop="componey" label="公司地址"></el-table-column>
        <el-table-column  prop="address" label="公司电话" width="200"></el-table-column>
        <el-table-column  prop="phone" label="公司行业"></el-table-column>
        <el-table-column  prop="phone" label="注册时间"></el-table-column>

      </TablesData>
      <!--分页-->
      <div class="table-pagination fr">
        <fenYe ref="asdf" :feYeData="wCustomer"></fenYe>
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
      ['wCustomer']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates']
      ),
      fastSearch(res){
        this.wCustomer.keyword=res;
//        console.log(res)
        this.searchFilter(this.wCustomer);
      },

      jinyong(){
//        this.wCustomer.selected=this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection;
//        console.log(this.wCustomer.selected)
        if(this.wCustomer.selected.length==1){
//          console.log(this.wCustomer.selected[0]);//table被选中的集合

//        this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.wCustomer.tableData[0],true);
          this.wCustomer.selected[0].type='禁用'
        }else{
          alert('请仅选择一项')
        }
//        console.log(this.wCustomer.selected);//table被选中的集合
      },

      qiyong(){
        if(this.wCustomer.selected.length==1){
          this.wCustomer.selected[0].type='启用'
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
      allRes.datas=this.wCustomer;
      allRes.tiems=20000;

      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.wCustomer);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
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


