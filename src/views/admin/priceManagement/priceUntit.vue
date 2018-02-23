<template>
  <div class="anclear ">
    <p class="describe">
      <strong>基价管理 </strong>1111111111111
    </p>
    <div class="ancontent fff anclear">
      <div class=" anclear ">
        <div class="anclear fl tableSearch" v-show="priceUntit.hasSearch">
          <el-input class="fr shaixuanbox" v-model="priceUntit.keyword" placeholder="筛选关键词" style="display: inline-block;margin-left: 20px"  ></el-input>
          <el-button class="fl btn-black"  icon="search" @click="searchFilter(priceUntit)" >检索</el-button>
        </div>
      </div>

      <el-button @click="xinzeng" size="small" class="btn-blackhover"   style="margin: 15px 0 0 0" >
        <i class="iconfont icon-chuangjian1"></i>
        新增
      </el-button>

      <TablesData :tableDatas="priceUntit"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=priceUntit.inputIndex type="index" lable="列" width="50"></el-table-column>
        <el-table-column v-if=priceUntit.inputSection type="selection"   width="50"></el-table-column>
        <el-table-column  prop="basepriceid" label="id " width="60"></el-table-column>
        <el-table-column  prop="baseprice" label=" 定价单元名称"></el-table-column>
        <el-table-column  prop="priceUnit.unitname" label="对象类型 "></el-table-column>
        <el-table-column  prop="priceQOS.qosname" label="第一属性 "></el-table-column>
        <el-table-column v-if="priceUntit.editTable"  label="操作 " width="180">
          <template scope="scope" >
            <el-button class="btn-blackhover"  size="small" @click="handleEdit(scope)">修改</el-button>
          </template>
        </el-table-column>

      </TablesData>

      <div class="table-pagination fr">
        <fenYe :feYeData="priceUntit"></fenYe>
      </div>

    </div>


    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>定价单元名称：</div>
            <div style="    padding-left:4px;">
              <el-input v-model="input1" placeholder="请输入定价单元名称"></el-input>
            </div>
          </li>
          <li >
            <div>对象类型：</div>
            <div class="mg24">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>第一属性：</div>
            <div class="mg20">
              <el-input v-model="input2" placeholder="请输入第一属性"></el-input>
            </div>
          </li>
          <li >
            <div>第二属性：</div>
            <div class="mg20">
              <el-input v-model="input3" placeholder="请输入第二属性"></el-input>
            </div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>定价单元名称：</div>
            <div>
              <el-input v-model="input4" placeholder="请输入定价单元名称"></el-input>
            </div>
          </li>
          <li >
            <div>对象类型：</div>
            <div style="margin-left: 20px;">
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>第一属性：</div>
            <div class="mg24">
              <el-input v-model="input5" placeholder="请输入第一属性"></el-input>
            </div>
          </li>
          <li >
            <div>第二属性：</div>
            <div class="mg24">
              <el-input v-model="input6" placeholder="请输入第二属性"></el-input>
            </div>
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
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        value:'',
        value1:'带宽',
        options: [{
          value: '选项1',
          label: '磁盘'
        }, {
          value: '选项2',
          label: '宽带'
        }, {
          value: '选项3',
          label: '路由器'
        }, {
          value: '选项4',
          label: '主机'
        }, {
          value: '选项5',
          label: '主机映像'
        },
          {
            value: '选项6',
            label: '快照'
          },
          {
            value: '选项7',
            label: '系统镜像'
          },
          {
            value: '选项8',
            label: 'SDN'
          }],
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
      }
    },
    computed:mapGetters(
      ['priceUntit']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData']
      ),
      xinzeng(){
        this.pop(['新增',this.pop1]);
      },
      pop1fun(){
        console.log(this.priceUntit.selected);
      },
      handleEdit(){
        this.pop(['修改',this.pop2]);
      },
      pop2fun(){
        console.log(this.priceUntit.selected);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='https://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/jjgl';
      allRes.datas=this.priceUntit;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.priceUntit);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.priceUntit.selected=[];
        this.priceUntit.keyword='';
      })
    }



  }
</script>
<style scoped>
  .tableSearch {
    margin: 10px 0;
  }
  .mg20{
    margin-left:5px;
  }
  .pop .popContent input{
    width: 170px;
  }
</style>
