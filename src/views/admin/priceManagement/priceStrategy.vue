<template>
  <div class="anclear ">
    <p class="describe">
      <strong>计价策略 </strong>1111111111111
    </p>
    <div class="ancontent fff anclear">
      <div class=" anclear ">
        <div class="anclear fl tableSearch" v-show="priceStrategy.hasSearch">
          <el-input class="fr shaixuanbox" v-model="priceStrategy.keyword" placeholder="筛选关键词" style="display: inline-block;margin-left: 20px"  ></el-input>
          <el-button class="fl btn-black"  icon="search" @click="searchFilter(priceStrategy)" >检索</el-button>
        </div>
      </div>

      <el-button @click="xinzeng" size="small" class="btn-blackhover"   style="margin: 15px 0 0 0" >
        <i class="iconfont icon-chuangjian1"></i>
        新增
      </el-button>

      <TablesData :tableDatas="priceStrategy"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=priceStrategy.inputIndex type="index" lable="列" width="50"></el-table-column>
        <el-table-column v-if=priceStrategy.inputSection type="selection"   width="50"></el-table-column>
        <el-table-column  prop="basepriceid" label="计价策略 " width="60"></el-table-column>
        <el-table-column  prop="baseprice" label=" 计价周期"></el-table-column>
        <el-table-column  prop="priceUnit.unitname" label="支付方式 "></el-table-column>
        <el-table-column  prop="priceQOS.qosname" label="对象类型 "></el-table-column>
        <el-table-column  prop="objectType" label="折扣率 "></el-table-column>
        <el-table-column  prop="fromTime" label="计价形式 "></el-table-column>
        <el-table-column  prop="toTime" label="是否共享 "></el-table-column>
        <el-table-column  prop="toTime" label="基础定价集 " width="120"></el-table-column>
        <el-table-column  prop="toTime" label="计价时间段 " width="120"></el-table-column>
        <el-table-column  prop="toTime" label="优先等级 "></el-table-column>
        <el-table-column  prop="toTime" label="操作 "></el-table-column>
        <!--<el-table-column v-if="priceStrategy.editTable"  label="操作 " width="180">-->
          <!--<template scope="scope" >-->
            <!--<el-button class="btn-blackhover"  size="small" @click="handleEdit(scope)">编辑</el-button>-->
            <!--<el-button class="btn-blackhover" size="small"  @click="handleDelete( scope)">删除</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->

      </TablesData>

      <div class="table-pagination fr">
        <fenYe :feYeData="priceStrategy"></fenYe>
      </div>

    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>计价策略：</div>
            <div  class="mg16">
              <el-input v-model="input" placeholder="请输入计价策略"></el-input>
            </div>
          </li>
          <li >
            <div>计价周期：</div>
            <div class="mg11">
              <el-select v-model="value" placeholder="请选择对象类型">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>支付方式：</div>
            <div class="mg11">
              <el-select v-model="value2" placeholder="请选择对象类型">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>对象类型：</div>
            <div class="mg11">
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
          <li >
            <div style="    margin-right:12px;">折扣率：</div>
            <div  class="mg16">
              <el-input-number v-model="num3" ></el-input-number>
            </div>
          </li>
          <li >
          <div>计价形式：</div>
          <div class="mg11">
            <el-select v-model="value4" placeholder="请选择对象类型">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          </li>
          <li >
            <div>是否共享：</div>
            <div class="mg11">
              <el-select v-model="value5" placeholder="请选择对象类型">
                <el-option
                  v-for="item in options5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
          <li >
            <div>基础定价集：</div>
            <div style="margin-left: 6px;">
              <el-button>选择基础定价</el-button>
            </div>
          </li>
          <li  class="dsadsa">
            <div>定价QoS：</div>
            <div class="mg16">
              <el-time-picker
                v-model="startTime"
                placeholder="起始时间点">
              </el-time-picker>
              <el-time-picker
                v-model="endTime"
                placeholder="结束时间点">
              </el-time-picker>
            </div>
          </li>
          <li >
            <div style="margin-right:13px;">优先级：</div>
            <div class="mg16">
              <el-input-number v-model="num2" >请输入优先级</el-input-number>
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
        num2:'',
        input:'',
        endTime:'',
        startTime:'',
        value:'',
        value1:'',
        value2:'',
        value4:'',
        value5:'',
        num3:'',
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
        options1:[{
          value:'选项1',
          label:'秒',
        },
          {
            value:'选项2',
            label:'分',
          },
          {
            value:'选项1',
            label:'小时',
          },
          {
            value:'选项1',
            label:'天',
          },
          {
            value:'选项1',
            label:'月',
          },
          {
            value:'选项1',
            label:'年',
          },],
        options2:[{
          value:'选项1',
          label:'实时',
        },
          {
            value:'选项2',
            label:'先付',
          },
          {
            value:'选项1',
            label:'后付',
          },],
        options4:[{
          value:'选项1',
          label:'配置上限',
        },
          {
            value:'选项2',
            label:'实际用量',
          },],
        options5:[{
          value:'选项1',
          label:'共享',
        },
          {
            value:'选项2',
            label:'不共享',
          },],
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
      }
    },
    computed:mapGetters(
      ['priceStrategy']
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
        console.log(this.priceStrategy.selected);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/jjgl';
      allRes.datas=this.priceStrategy;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.priceStrategy);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.priceStrategy.selected=[];
        this.priceStrategy.keyword='';
      })
    }



  }
</script>
<style scoped>
  .tableSearch {
    margin: 10px 0;
  }

</style>
