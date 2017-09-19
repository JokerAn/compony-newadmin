<template>
  <div class="anclear ">
    <p class="describe">
      <strong>{{ zhgl }}</strong>
    </p>
    <ul class="describe tab-list">
      <li class="fl tab1 tab-list_cor" @click="tabClick1">{{ jbxx }}</li>
      <li class="fl tab2" @click="tabClick2">{{ rzxx }}</li>
      <li class="fl tab3" @click="tabClick3">{{ xgsjh }}</li>
      <li class="fl tab4" @click="tabClick4">{{ xgmm }}</li>
    </ul>
    <div class="anclear fff ancontent ancontent1" >
      <div class="anclear fff">
        <ul class="fl listbox">
          <li>
            <span>登录账户：</span>
            <div class="asps">gztrkfqhh@126.com</div>
          </li>
          <li>
            <span>注册时间：</span>
            <div class="asps time">2017-05-25 15:44:38</div>
          </li>
          <li>
            <span>用户呢称：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="脉展_zh">
          </li>
          <li>
            <span>用户邮箱：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="gztrkfqhh@126.com">
          </li>
          <li>
            <span>公司名称：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="脉展">
          </li>
          <li>
            <span>公司地址：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="">
          </li>
          <li>
            <span>公司行业：</span>
            <select name="industry" class="input1" style="width:210px;">
              <option value="1" selected="selected">互联网金融</option>
              <option value="2">视频</option>
              <option value="3">在线教育</option>
              <option value="4">游戏</option>
              <option value="5">电子商务</option>
              <option value="6">PaaS</option>
              <option value="7">DevOps</option>
              <option value="8">大数据</option>
              <option value="9">移动 APP</option>
              <option value="10">媒体</option>
              <option value="11">科学</option>
              <option value="12">娱乐</option>
              <option value="13">商业企业</option>
              <option value="14">政府</option>
              <option value="15">个人</option>
              <option value="16">其他</option>
            </select>
          </li>
          <li>
            <span>公司电话：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="">
          </li>
        </ul>
        <div class="fl btnbox" style="margin-left: 88px;">
          <a class="el-button fl btn-black el-button--default">取消</a>
          <a class="el-button fl btn-black el-button--default">确定</a>
        </div>
      </div>
    </div>

    <div class="anclear fff ancontent ancontent2" >
      <div class="anclear fff">
        <div class="yhlx">
          <span>
            用户类型
          </span>
          <span style="margin: 0 50px 0 10px;">
            个人用户
          </span>
          <a href="javascript:;" @click="tabClick5">升级为企业用户</a>
        </div>
        <div class="yhlx" style="margin:20px 10px;">
          <span>
            认证状态
          </span>
          <span style="margin: 0 50px 0 10px;color: #777;">
            审核中
          </span>
        </div>
        <div style="border-bottom: 2px solid #ccc;width: 400px;margin: 20px 0;"></div>
        <div class="h_usertype00_3">
          <h4 style="  text-align: center;">上传图片的注意事项</h4>
          <ul style="padding: 15px 0px 15px 20px;" class="miaoshubox">
            <li>支持的图片格式包括 JPG、JPEG 和 PNG；</li>
            <li>上传的图片需清晰完整；</li>
            <li>上传个人大头照的目的是与身份证上的头像比对认证，对图片无其它限制。</li>
            <li>如果企业已经开始使用三证合一后的新证件，只需要上传「税务登记证图片」即可。</li>
          </ul>
        </div>
        <ul class="fl listbox">
          <li>
            <span style="    padding-right: 28px;">联系人姓名</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="脉展_zh">
          </li>
          <li>
            <span>联系人身份证号</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="23455677654">
          </li>
          <li>
            <span>身份证正面图片</span>
            <div class="h_usertype00_5_2">
              <input class="h_usertype00_5_3" type="file" name="identityCard">
              <span class="h_usertype00_5_4">点击上传</span>
            </div>
          </li>
          <li>
            <span style="    padding-right: 28px;">个人大头照</span>
            <div class="h_usertype00_5_2">
              <input class="h_usertype00_5_3" type="file" name="photo">
              <span class="h_usertype00_5_4">点击上传</span>
            </div>
          </li>
        </ul>
        <div class="fl btnbox" style="margin-left: 115px;">
          <a class="el-button fl btn-black el-button--default">提交</a>
        </div>
      </div>
    </div>

    <div class="anclear fff ancontent ancontent2_1" >
      <div class="anclear fff">
        <div class="yhlx">
          <span>
            用户类型
          </span>
          <span style="margin: 0 50px 0 10px;">
            企业用户
          </span>
         <!-- <a href="javascript:;">升级为企业用户</a>-->
        </div>
        <div class="yhlx" style="margin:20px 10px;">
          <span>
            认证状态
          </span>
          <span style="margin: 0 50px 0 10px;color: #777;">
            未认证
          </span>
        </div>
        <div style="border-bottom: 2px solid #ccc;width: 400px;margin: 20px 0;"></div>
        <div class="h_usertype00_3">
          <h4 style="  text-align: center;">上传图片的注意事项</h4>
          <ul style="padding: 15px 0px 15px 20px;" class="miaoshubox">
            <li>支持的图片格式包括 JPG、JPEG 和 PNG；</li>
            <li>上传的图片需清晰完整；</li>
            <li>上传个人大头照的目的是与身份证上的头像比对认证，对图片无其它限制。</li>
            <li>如果企业已经开始使用三证合一后的新证件，只需要上传「税务登记证图片」即可。</li>
          </ul>
        </div>
        <ul class="fl listbox">
          <li>
            <span style="    padding-right: 28px;">公司名称</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="" style="margin-left: 25px;">
          </li>
          <li>
            <span>组织机构代码</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="" style="margin-left: 25px;">
          </li>
          <li>
            <span>税务登记证图片</span>
            <div class="h_usertype00_5_2">
              <input class="h_usertype00_5_3" type="file" name="identityCard">
              <span class="h_usertype00_5_4">点击上传</span>
            </div>
          </li>
          <li>
            <span style="    padding-right: 27px;">营业执照图片</span>
            <div class="h_usertype00_5_2" style="    margin-left: 0;">
              <input class="h_usertype00_5_3" type="file" name="photo">
              <span class="h_usertype00_5_4">点击上传</span>
            </div>
            <div style="border-bottom: 2px solid #ccc;width: 400px;margin: 20px 0;"></div>
          </li>
          <li>
            <span>联系人姓名</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="" style="margin-left: 42px;">
          </li>
          <li>
            <span>联系人身份证号</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" value="" style="margin-left: 15px;">
          </li>
          <li>
            <span style="    padding-right: 16px;">身份证正面图片</span>
            <div class="h_usertype00_5_2" style="    margin-left: 0;">
              <input class="h_usertype00_5_3" type="file" name="photo">
              <span class="h_usertype00_5_4">点击上传</span>
            </div>
          </li>
          <li>
            <span style="    padding-right: 44px;">个人大头照</span>
            <div class="h_usertype00_5_2" style="    margin-left: 0;">
              <input class="h_usertype00_5_3" type="file" name="photo">
              <span class="h_usertype00_5_4">点击上传</span>
            </div>
          </li>
        </ul>
        <div class="fl btnbox" style="    margin-left: 118px;">
          <a class="el-button fl btn-black el-button--default">提交</a>
        </div>
      </div>
    </div>









    <div class="anclear fff ancontent ancontent3" >
      <div class="anclear fff">
        <div style="border-bottom: 1px solid #ccc;padding-bottom: 10px;">
            要绑定的手机号
        </div>
        <ul class="fl listbox" style="margin-left: 20px;">
          <li>
            <span>登录账户：</span>
            <div class="asps">gztrkfqhh@126.com</div>
          </li>
          <li>
            <span style="    margin-left: 14px;">旧手机：</span>
            <div class="asps time">2017-05-25 15:44:38</div>
          </li>
          <li>
            <span style="margin-left: -21px;">*图形验证码：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" placeholder="输入右测验证码">
          </li>
          <li>
            <span style="margin-left: 4px;">* 新手机：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" placeholder="要绑定的手机号码">
          </li>
          <li>
            <span style="    margin-left: -21px;">*短信验证码：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" placeholder="输入短信验证码">
          </li>

        </ul>
        <div class="fl btnbox" style="margin-left: 108px;">
          <a class="el-button fl btn-black el-button--default">确认更改</a>
        </div>
      </div>
    </div>
    <div class="anclear fff ancontent ancontent4" >
      <div class="anclear fff">
        <ul class="fl listbox" style="margin-left: 20px;">
          <li>
            <span>旧密码：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" placeholder="">
          </li>
          <li>
            <span>新密码：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" placeholder="">
          </li>
          <li>
            <span style="    margin-left: -14px;">确认密码：</span>
            <input type="text" name="custName" size="20" maxlength="40" class="input shuru" placeholder="">
          </li>
        </ul>
        <div class="fl btnbox" style="margin-left: 94px;">
          <a class="el-button fl btn-black el-button--default">确认更改</a>
        </div>
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
        zhgl:'账户管理',
        jbxx:'基本信息',
        rzxx:'认证信息',
        xgsjh:'修改手机号',
        xgmm:'修改密码'
      }
    },
    computed:mapGetters(
      ['vipRechargeManagement']
    ),
    fastSearch(res){
      this.vipRechargeManagement.keyword=res;
//        console.log(res)
      this.searchFilter(this.vipRechargeManagement);
    },
    components:{

    },
    methods:{
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),

//tab切换点击
      tabClick1(){
        $('.tab1').addClass('tab-list_cor').siblings('li').removeClass('tab-list_cor');
        $('.ancontent1').show().siblings('div').hide();
      },
      tabClick2(){
        $('.tab2').addClass('tab-list_cor').siblings('li').removeClass('tab-list_cor');
        $('.ancontent2').show().siblings('div').hide();
      },
      tabClick3(){
        $('.tab3').addClass('tab-list_cor').siblings('li').removeClass('tab-list_cor');
        $('.ancontent3').show().siblings('div').hide();
      },
      tabClick4(){
        $('.tab4').addClass('tab-list_cor').siblings('li').removeClass('tab-list_cor');
        $('.ancontent4').show().siblings('div').hide();
      },
      tabClick5(){
        $('.ancontent2').hide().siblings('.ancontent2_1').show();
      },

    },

    created:function() {
      var allRes = {};
      allRes.url = 'http://easy-mock.com/mock/59715ceca1d30433d839315c/teldata/recharge';
      allRes.datas = this.vipRechargeManagement;
      allRes.tiems = 20000;

      this.getTableData(allRes);

//      this.handleSizeChange();
    },
    mounted:function () {
      this.$nextTick(function () {
        this.searchFilter(this.vipRechargeManagement);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
      })
    }



  }
</script>
<style scoped>
  .tab-list{
    height:50px;
  }
  .tab-list_cor{
    background: #fff !important;
    font-weight:bold;
  }
  .tab-list_cor2{
    background: #428bca !important;
    color: #fff;
  }
  .tab-list>li{
    width:84px;
    background: #d6dfe2;
    border-radius: 3px 3px 0 0;
    margin-right: 5px;
    height:38px;
    cursor: pointer;
    text-align: center;
    line-height:38px;
  }
  .el-button{
    padding:9px 14px;
  }
  .ancontent{
    display: none;
  }
  .ancontent1{
    display: block;
  }
  .listbox{
    width:100%;
  }
  .listbox>li{
    float: left;
    margin:4px 0;
    width:100%;
  }
  .listbox>li>span{
    font-size:14px;
  }
  .listbox>li>.asps{
    width: 210px;
    background:#eee;
    border: 2px solid #cbcad8;
    padding:7px;
    display: inline-block;
    margin-left: 12px;
  }
  .listbox>li .shuru{
    border: 2px solid #cbcad8;
    background: #fff;
    width: 210px;
    margin-left: 13px;
    outline: 0;
    display: inline-block;
    padding: 7px;
    font-size: 14px;
    line-height: 16px;
    color: #555;
    vertical-align: middle;
    border-radius: 3px;
    -webkit-appearance: none;
  }
  .listbox>li .shuru:focus{
     border-color: rgb(66, 139, 202);
  }
  .h_usertype00_5_2{
    display: inline-block;
    margin-left: 12px;
    position: relative;
    overflow: hidden;
    top: 9px;
  }
  .h_usertype00_5_3{
    position: absolute;
    cursor: pointer;
    text-indent: -9999996px;
    font-family: '微软雅黑';
    color: #fff;
    font-size: 50px;
  }
  .h_usertype00_5_4{
    width: 82px;
    height: 30px;
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    background: #3b3f4e;
    display: block;
  }
  .input1 {
    display: inline-block;
    padding: 6px 8px;
    overflow: hidden;
    vertical-align: middle;
    outline: none;
    margin: 0 10px 0 0;
    position: relative;
    margin-left: 13px;
    height: 33px;
    border: 2px solid #cbcad8;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    line-height: 35px;
    border-radius: 3px;
    background-image: -webkit-linear-gradient(top, #fff, #ebebeb);
    background-image: -moz-linear-gradient(top, #fff, #ebebeb);
    background-image: -o-linear-gradient(top, #fff, #ebebeb);
    background-image: linear-gradient(to bottom, #fff, #ebebeb);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
  }
  .yhlx{
    margin-left:10px;
  }
  .yhlx>span{
    display: inline-block;
    font-size:14px;
    font-weight:bold;
  }
  .yhlx>a{
    color: #1f90c8;
    font-weight:bold;
    font-size:14px;
  }
  .miaoshubox>li{
    list-style:initial;
  }
  .h_usertype00_3{
    position: absolute;
    left: 628px;
    top: 280px;
    padding: 15px;
    width: 260px;
    border-radius: 3px;
    background-color: #e4eaec;
  }
  .h_usertype00_3>h4{
    font-size: 16px;
    line-height: 20px;
    font-weight:normal;
  }
  .ancontent2_1{
    display: none;
  }
</style>

