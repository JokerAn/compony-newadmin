<template>
  <div class="anclear ">
    <p class="describe">
      <strong>基价管理 </strong>1111111111111
    </p>
    <div class="ancontent fff anclear">
      <div class=" anclear ">
        <div class="anclear fl tableSearch" v-show="jjglTableDatas.hasSearch">
          <el-input class="fr shaixuanbox" v-model="jjglTableDatas.keyword" placeholder="筛选关键词" style="display: inline-block;margin-left: 20px"  ></el-input>
          <el-button class="fl btn-black"  icon="search" @click="searchFilter(jjglTableDatas)" >检索</el-button>
        </div>
      </div>

      <el-button @click="xinzeng" size="small" class="btn-blackhover" style="margin: 15px 0 0 0" >
        <i class="iconfont icon-chuangjian1"></i>
        新增
      </el-button>

      <TablesData :tableDatas="jjglTableDatas"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=jjglTableDatas.inputIndex type="index" lable="列" width="50"></el-table-column>
        <el-table-column v-if=jjglTableDatas.inputSection type="selection"   width="50"></el-table-column>
        <el-table-column  prop="basepriceid" label="id " width="60"></el-table-column>
        <el-table-column  prop="baseprice" label=" 基础定价"></el-table-column>
        <el-table-column  prop="priceUnit.unitname" label="定价单元 "></el-table-column>
        <el-table-column  prop="priceQOS.qosname" label="定价QoS "></el-table-column>
        <el-table-column  prop="objectType" label="对象类型 "></el-table-column>
        <el-table-column  prop="fromTime" label="起始时间 "></el-table-column>
        <el-table-column  prop="toTime" label="结束时间 "></el-table-column>
        <el-table-column v-if="jjglTableDatas.editTable"  label="操作 " width="180">
          <template scope="scope" >
            <el-button class="btn-blackhover"  size="small" @click="handleEdit(scope)">编辑</el-button>
            <el-button class="btn-blackhover" size="small"  @click="handleDelete( scope)">删除</el-button>
          </template>
        </el-table-column>

      </TablesData>

      <div class="table-pagination fr">
        <fenYe :feYeData="jjglTableDatas"></fenYe>
      </div>

    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>基础定价：</div>
            <div>
              <el-input v-model="input" placeholder="请输入位置名称"></el-input>
            </div>
          </li>
          <li >
            <div>对象类型：</div>
            <div>
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
            <div>定价QoS：</div>
            <div>
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
          <li>
            <el-button type="primary">增加</el-button>
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
        input:'',
        endTime:'',
        startTime:'',
        value1:'',
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
      }
    },
    computed:mapGetters(
      ['jjglTableDatas']
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
        console.log(this.jjglTableDatas.selected);
      },

    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/jjgl';
      allRes.datas=this.jjglTableDatas;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.jjglTableDatas);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.jjglTableDatas.selected=[];
        this.jjglTableDatas.keyword='';
      })
    }



  }
</script>
<style scoped>
  .tableSearch {
     margin: 10px 0;
  }
</style>
