<template>
  <div class="right-page anclear">
    <!--<h1>我是customer 二级页面</h1>-->
    <!--<h1>{{userInfo}}</h1>-->
    <ul class="userInfo anclear">
      <li><strong>公司名称：</strong><span>{{userInfo.componey}}</span></li>
      <li><strong>公司电话：</strong><span>{{userInfo.phone}}</span></li>
      <li><strong>客户名称：</strong><span>{{userInfo.name}}</span></li>
      <li><strong>客户手机：</strong><span>{{userInfo.mobilePhone}}</span></li>
      <li><strong>客户余额：</strong><span>{{userInfo.id}}</span></li>
      <li><strong>客户状态：</strong><span>{{userInfo.type}}</span></li>
      <li><strong>{{userInfo.numTop}}台数上限：</strong><el-button size="small" class="btn-black" @click="pop(['更改主机台数上限',pop1])">更改</el-button></li>
    </ul>
    <div class="line"></div>
    <div class="rechargeRecord anclear">
      <div class="fl" >
        <strong>充值记录</strong> <el-button class="btn-black" size="small"@click="pop(['充值记录',pop2])">充值记录</el-button>
      </div>
      <div class="customer2-fenye fr">
        <fenYe ref="asdf" :feYeData="customer2Recharge"></fenYe>
      </div>
      <TablesData ref="multipleTable2" :tableDatas="customer2Recharge" >
        <el-table-column  prop="rechargeType" label="充值方式"></el-table-column>
        <el-table-column  prop="money" label="充值金额(元)"></el-table-column>
        <el-table-column  prop="rechargeTime" label="充值时间"></el-table-column>
        <el-table-column  prop="three" label="第三方" width=""></el-table-column>
        <el-table-column  prop="isOk" label="状态"></el-table-column>
        <el-table-column  prop="edit" label="操作"></el-table-column>
      </TablesData>

    </div>
    <div class="rechargeRecord anclear">
      <div class="fl" >
        <strong>消费记录</strong>
      </div>
      <div class="customer2-fenye fr">
        <fenYe ref="asdf" :feYeData="customer2Recharge"></fenYe>
      </div>
      <TablesData ref="multipleTable2" :tableDatas="customer2Recharge" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->
        <el-table-column  prop="" label="服务名称">
          <template scope="scope">
            <span>北京1区</span>
          </template>
        </el-table-column>
        <el-table-column  prop="rechargeType" label="服务类型"></el-table-column>
        <el-table-column  prop="isOk" label="服务种类"></el-table-column>
        <el-table-column  prop="money" label="消费金额(元)" width=""></el-table-column>
        <el-table-column  prop="rechargeTime" label="开始时间"></el-table-column>
        <el-table-column  prop="rechargeTime" label="结束时间"></el-table-column>
      </TablesData>

    </div>
    <div class="rechargeRecord anclear">
      <div class="fl" >
        <strong>操作记录</strong>
      </div>
      <div class="customer2-fenye fr">
        <fenYe ref="asdf" :feYeData="customer2Recharge"></fenYe>
      </div>
      <TablesData ref="multipleTable2" :tableDatas="customer2Recharge" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->
        <el-table-column  prop="rechargeTime" label="操作时间"></el-table-column>
        <el-table-column  prop="three" label="操作IP" width=""></el-table-column>
        <el-table-column  prop="isOk" label="描述"></el-table-column>
      </TablesData>

    </div>
    <div class="rechargeRecord anclear">
      <div class="fl" >
        <strong>登录信息</strong>
      </div>
      <div class="customer2-fenye fr">
        <fenYe ref="asdf" :feYeData="customer2Recharge"></fenYe>
      </div>
      <TablesData ref="multipleTable2" :tableDatas="customer2Recharge" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->
        <el-table-column  prop="money" label="登录IP"></el-table-column>
        <el-table-column  prop="rechargeTime" label="登录时间"></el-table-column>
      </TablesData>

    </div>
    <ul class="goBack">
      <li>
        <!--<router-link tag="el-button" class="btn-black" to='/customer/index'>返回</router-link>-->
        <el-button class="btn-black" size="small" @click="goToPage(['/management/customer'])">返回</el-button>
      </li>
    </ul>
    <Pop :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width150">
          <li >
            <div>主机上线:</div>
            <div><input type="text" v-model="pop1.numTop"  style="padding: 0 8px;"> 台</div>
          </li>
        </ul>

      </div>

    </Pop>
    <Pop :itemss="pop2" >
      <div class="popContent">
        <ul class="an-width150">
          <li >
            <div>公司名称：</div>
            <div>{{userInfo.componey}}</div>
          </li>
          <li>
            <div>客户名称：</div>
            <div>{{userInfo.componey}}</div>
          </li>
          <li>
            <div>充值方式：</div>
            <div>
              <el-radio-group v-model="howToPay">
                <el-radio :label="3">线下</el-radio>
                <el-radio :label="6">赠送</el-radio>
              </el-radio-group>
            </div>
          </li>
          <li>
            <div>充值金额：</div>
            <div>
              <input class="datainp wicon andate" type="text"> 元
            </div>
          </li>
          <li>
            <div>起始日期</div>
            <div>
              <input class=" andate" type="text" readonly>
            </div>
          </li>
          <li>
            <div>结束日期</div>
            <div>
              <input class="datainp wicon andate" type="text"  readonly>
            </div>
          </li>
          <li>
            <div>起始日期</div>
            <div>
              <input class=" andate" type="text" readonly>
            </div>
          </li>
          <li>
            <div>结束日期</div>
            <div>
              <input class="datainp wicon andate" type="text"  readonly>
            </div>
          </li>
          <li>
            <div>起始日期</div>
            <div>
              <input class=" andate" type="text" readonly>
            </div>
          </li>
          <li>
            <div>结束日期</div>
            <div>
              <input class="datainp wicon andate" type="text"  readonly>
            </div>
          </li>
          <li>
            <div>起始日期</div>
            <div>
              <input class=" andate" type="text" readonly>
            </div>
          </li>
          <li>
            <div>结束日期</div>
            <div>
              <input class="datainp wicon andate" type="text"  readonly>
            </div>
          </li>
          <br>
          aaaaaaaa
          <br>
          <br>
          aaaaaaaa
          <br>
          <br>
          aaaaaaaa
          <br>
          <br>
          aaaaaaaa
          <br><br>
          aaaaaaaa
          <br>
          <br>
          aaaaaaaa
          <br>
          <br>
          aaaaaaaa
          <br>
          <br>
          aaaaaaaa
          <br>


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
        howToPay:'1',
        userInfo:{},
        recharge:{
          tableData:[1,2]
        },
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
        pop2:{
          popTitle:'',
          fun:this.pop2fun
        },

        customer2Recharge:{
          toTal:true,//合计
          selected:[],
          keyword:'',
          hasSearch:true,
          lastShowData:[],
          fenYe:{
            currentPage:1,
            coline:[10, 30, 50],
            allColine:335,
            onePageNum:10,
          },
          tableData:
            []
        },
      }
    },
    computed:mapGetters(
      ['customer2','customerImageTableDatas']
    ),
    components:{
    },
    methods:{
      ...mapActions(
        ['getTableData','pop','goToPage']
      ),
      pop1fun(){
        this.userInfo.numTop=this.pop1.numTop

      },
      pop2fun(){
//        alert(2);
      },
    },

    created:function(){
      var allRes={};
      allRes.url='http://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/rechargerecord';
      allRes.datas=this.customer2Recharge;
      allRes.tiems=20000;
      this.getTableData(allRes);
      if(typeof this.$route.query.data!=='string'){
        this.userInfo=this.$route.query.data
        this.pop1.numTop=this.userInfo.numTop
      }else{
        this.router.push({path:'/management/customer'})
      }

    },
    mounted:function () {
      this.$nextTick(function () {

      })
    }



  }
</script>
<style scope>
  .userInfo{
    border-top:1px solid #ccc;
    font-family:'微软雅黑';
    font-size: 13px;
    margin:20px 0;
  }
  .userInfo li{
    border:1px solid #ccc;
    border-top:none;
    padding:4px;
  }
  .userInfo li strong{
    font-weight: 700;
  }
  .userInfo li:not(:last-child) span{
    color: #777;
    margin-right: 4px;
    font-size: 12px;
  }
  .right-page{
    /*margin: 10px;*/
    /*padding:20px;*/
  }
  .rechargeRecord{
    border:1px solid #ccc;
    padding:0 10px 20px 10px;
    margin: 20px 0;
  }
  .customer2-fenye{
    margin: 20px 0;
  }
  .rechargeRecord>div.fl{
    margin:20px 0;
  }
  .rechargeRecord>div.fl strong{
    color: #78a978;
    font-size: 13px;
  }
  .goBack li{
    text-align: center;
    border:1px solid #ccc;
    padding:5px 0;
  }
</style>
