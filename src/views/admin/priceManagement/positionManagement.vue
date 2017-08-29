<template>
  <div class="anclear ">
    <p class="describe">
      <strong>位置管理 </strong>1111111111111
    </p>
    <div class="ancontent fff anclear">
      <div class=" anclear ">
        <div class="anclear fl tableSearch" v-show="positionManagement.hasSearch">
          <el-input class="fr shaixuanbox" v-model="positionManagement.keyword" placeholder="筛选关键词" style="display: inline-block;margin-left: 20px"  ></el-input>
          <el-button class="fl btn-black"  icon="search" @click="searchFilter(positionManagement)" >检索</el-button>
        </div>
      </div>

      <el-button @click="xinzeng" size="small" class="btn-blackhover"  style="margin: 15px 0 0 0" >
        <i class="iconfont icon-chuangjian1"></i>
        新增
      </el-button>

      <TablesData :tableDatas="positionManagement"> <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

        <el-table-column  v-if=positionManagement.inputIndex type="index" lable="列" width="50"></el-table-column>
        <el-table-column v-if=positionManagement.inputSection type="selection"   width="50"></el-table-column>
        <el-table-column  prop="basepriceid" label="id " width="60"></el-table-column>
        <el-table-column  prop="baseprice" label=" 位置"></el-table-column>
        <el-table-column  prop="priceUnit.unitname" label="位置代码 "></el-table-column>
        <el-table-column  prop="priceQOS.qosname" label="位置权重及对象类型 "></el-table-column>
        <el-table-column v-if="positionManagement.editTable"  label="操作 " width="180">
          <template scope="scope" >
            <el-button class="btn-blackhover"  size="small" @click="handleEdit(scope)">修改</el-button>
          </template>
        </el-table-column>

      </TablesData>

      <div class="table-pagination fr">
        <fenYe :feYeData="positionManagement"></fenYe>
      </div>
    </div>
    <Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
      <ul class="an-width170">
        <li >
          <div>位置名称：</div>
          <div>
            <el-input v-model="input" placeholder="请输入位置名称"></el-input>
          </div>
        </li>
        <li >
          <div>位置代码：</div>
          <div>
            <el-input v-model="input" placeholder="请输入位置名称"></el-input>
          </div>
        </li>
        <li>
          <el-button type="primary">增加</el-button>
        </li>
      </ul>
    </div>
    </Pop>
    <Pop v-if="pop2.popTitle" :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
            <div>位置名称：</div>
            <div>
              <el-input v-model="input" placeholder="请输入位置名称"></el-input>
            </div>
          </li>
          <li >
            <div>位置代码：</div>
            <div>
              <el-input v-model="input" placeholder="请输入位置名称"></el-input>
            </div>
          </li>
          <li >
            <div>位置权重及对象类型</div><div></div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num1" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value1" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">增加</el-button>
            </div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num2" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value2" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">移除</el-button>
            </div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num3" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value3" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">移除</el-button>
            </div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num4" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value4" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">移除</el-button>
            </div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num5" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value5" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">移除</el-button>
            </div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num6" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value6" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">移除</el-button>
            </div>
          </li>
          <li >
            <div >
              权重:
            </div>
            <div ><el-input-number v-model="num7" ></el-input-number></div>
            <div >
              类型：
            </div>
            <div >
              <el-select v-model="value7" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div >
              <el-button type="primary">移除</el-button>
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
        input:'',
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
        value1:'磁盘',
        value2:'快照',
        value3:'主机映像',
        value4:'带宽',
        value5:'路由器',
        value6:'主机',
        value7:'系统镜像',
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0,
        num7: 0,
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
      ['positionManagement']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        ['pop','searchFilter','fenyedabao','handleEdit','handleDelete','getTableData']//这里引用function
      ),
      handleChange(value) {
        console.log(value);
      },
      xinzeng(){
          this.pop(['新增',this.pop1]);
      },
      pop1fun(){
        console.log(this.positionManagement.selected);
      },
      handleEdit(){
        this.pop(['修改',this.pop2]);
        },
      pop2fun(){
        console.log(this.positionManagement.selected);
        },


    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/jjgl';
      allRes.datas=this.positionManagement;
      allRes.tiems=20000;


      this.getTableData(allRes);

//      this.handleSizeChange();

    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.positionManagement);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
        this.positionManagement.selected=[];
        this.positionManagement.keyword='';
      })
    }



  }
</script>
<style scoped>
  .tableSearch {
    margin: 10px 0;
  }
</style>
