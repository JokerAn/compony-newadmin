<template>
  <div class="anclear ">
    <p class="describe">
      <strong>服务质量 </strong>
    </p>
    <div class="ancontent fff anclear">
      <div class=" anclear ">
        <div class="anclear fl tableSearch" v-show="priceQoS.hasSearch">
          <el-input class="fr shaixuanbox" v-model="priceQoS.keyword" placeholder="筛选关键词" style="display: inline-block;margin-left: 20px"  ></el-input>
          <el-button class="fl btn-black"  icon="search" @click="searchFilter(priceQoS)" >检索</el-button>
        </div>
      </div>

      <el-button @click="xinzeng" size="small" class="btn-blackhover"  style="margin: 15px 0 0 0" >
        <i class="iconfont icon-chuangjian1"></i>
        新增
      </el-button>

      <TablesData :tableDatas="priceQoS"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=priceQoS.inputIndex type="index" lable="列" width="50"></el-table-column>
        <el-table-column v-if=priceQoS.inputSection type="selection"   width="50"></el-table-column>
        <el-table-column  prop="basepriceid" label="id " width="60"></el-table-column>
        <el-table-column  prop="baseprice" label=" QoS名称"></el-table-column>
        <el-table-column  prop="priceUnit.unitname" label="对象类型 "></el-table-column>
        <el-table-column  prop="priceQOS.qosname" label="QoS权限 "></el-table-column>
        <el-table-column v-if="priceQoS.editTable"  label="操作 " width="180">
          <template scope="scope" >
            <el-button class="btn-blackhover"  size="small" @click="handleEdit(scope)">修改</el-button>
            <el-button class="btn-blackhover" size="small"  @click="handleDelete( scope)">删除</el-button>
          </template>
        </el-table-column>

      </TablesData>

      <div class="table-pagination fr">
        <fenYe :feYeData="priceQoS"></fenYe>
      </div>

    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>QoS名称：</div>
            <div style="margin-left: 4px;">
              <el-input v-model="input1" placeholder="请输入QoS名称"></el-input>
            </div>
          </li>
          <li >
            <div>对象类型：</div>
            <div>
              <el-select v-model="value" placeholder="请选择对象类型">
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
            <div>QoS权重：</div>
            <div class="mg4">
              <el-input-number v-model="num1" ></el-input-number>
            </div>
          </li>
        </ul>
      </div>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>QoS名称：</div>
            <div>
              <el-input v-model="input2" placeholder="请输入QoS名称"></el-input>
            </div>
          </li>
          <li >
            <div>对象类型：</div>
            <div  class="mg_5">
              <el-select v-model="value1" placeholder="请选择对象类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li>
            <div>QoS权重：</div>
            <div>
              <el-input-number v-model="num2" ></el-input-number>
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
        num1:'',
        value:'',
        input2:'',
        num2:'',
        value1:'快照',
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
      ['priceQoS']
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
        console.log(this.priceQoS.selected);
      },
      handleEdit(){
         this.pop(['修改',this.pop2]);
      },
      pop2fun(){
        console.log(this.priceQoS.selected);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/jjgl';
      allRes.datas=this.priceQoS;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.priceQoS);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.priceQoS.selected=[];
        this.priceQoS.keyword='';
      })
    }



  }
</script>
<style scoped>
  .tableSearch {
    margin: 10px 0;
  }
  .popContent ul li div{
    padding: 0 2px;
  }
  .el-input-number{
    width:200px;
  }
</style>
