
<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm"  ref="loginForm" label-position="left" label-width="0px"
             class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <span class="svg-container">
                  <!--<icon-svg icon-class="jiedianyoujian"></icon-svg>-->
        </span>
        <el-input autoComplete="on" name="email" type="text" v-model="loginForm.email"
                  placeholder="邮箱" @keyup.enter.native="handleLogin" @blur="checkEmail">
        </el-input>

      </el-form-item>
      <p v-show="!emailTure"><span>请输入正确的邮箱</span></p>
      <b style="visibility: visible;margin: 15px 0 0 0;display: block; height:1px;"></b>
      <el-form-item prop="password">
        <span class="svg-container">
                  <!--<icon-svg icon-class="mima" ></icon-svg>-->
        </span>
        <el-input autoComplete="on" name="password" type="password" @keyup.enter.native="handleLogin" @blur="checkPwd"
                  v-model="loginForm.password" placeholder="请输入6-10位密码">
        </el-input>


      </el-form-item>
      <p v-show="!pwdTure"><span>请输入正确的密码</span></p>
      <b style="visibility: visible;margin: 15px 0 0 0;display: block; height:1px;"></b>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin" >
          登录
        </el-button>
      </el-form-item>
      <b style="visibility: visible;margin: 15px 0 0 0;display: block; height:1px;"></b>
      <div class='tips'>admin账号为:admin@wallstreetcn.com 密码随便填</div>
      <div class='tips'>editor账号:editor@wallstreetcn.com 密码随便填</div>
    </el-form>
  </div>
</template>

<script>
  import Vue from 'vue'

  import Cookies from 'js-cookie';
  import { mapGetters } from 'vuex';

  import { isWscnEmail } from '@/utils/validate';
  import { login} from '@/api/login';
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          email: 'editor@wallstreetcn.com',
          password: '11111s1'
        },
        loading: false,
        emailTure:true,
        pwdTure:true,
      }
    },
    computed: {
      ...mapGetters([
        'token','userName'
      ])
    },
    methods: {
      checkEmail(){
        let email = this.loginForm.email.trim();
        email= email.trim();
        let regEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let goodEmail=regEmail.test(email);
        if (goodEmail) {
          this.emailTure=true;
        } else {
          this.emailTure=false;
        }
//        console.log(this.emailTure);
      },
      checkPwd(){
        let password = this.loginForm.password;

        let regPwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
        let goodPwd=regPwd.test(password);
//        console.log(goodPwd)
        if (goodPwd) {
          this.pwdTure=true;
        } else {
          this.pwdTure=false;
        }
      },

      handleLogin() {
        this.checkEmail();
        this.checkPwd();
        let email = this.loginForm.email.trim();
        let password = this.loginForm.password;
        if(this.emailTure&&this.pwdTure){
          this.axios.post(
            'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/user/login',
            {email,password}).then(response => {
//            console.log(response.data);
//            console.log(response.data.data.token);
            Cookies.set('Admin-Token', response.data.data.token);
            Cookies.set('longtelUserName', email);
            this.token=Cookies.get('Admin-Token');
            this.router.push({ path: '/' });
            location.reload()
          }).catch(function(res){
            // setTimeout(function(){mutations.getTableData(states,allRes);},allRes.tiems)
            console.log('ERROR--'+res)
          });
        }else{
          console.log('邮箱或者密码错误')
        }

      }
    },
    mounted:function () {
//      console.log(this.loginForm.email);
//      console.log(this.loginForm.password);
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../css/mixin.scss";
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
  }

  .login-container {
    @include relative;
    height: 100vh;
    background-color: #2d3a4b;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }
    .title {
      font-size: 26px;
      color: #eeeeee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      margin-bottom:2px;
    }
    p{
      margin-bottom:15px;
      span{
        color: #f94;
      }
    }
    .forget-pwd {
      color: #fff;
    }

  }
</style>






<!--<template>-->
<!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--<el-form-item label="活动名称" prop="name">-->
<!--<el-input v-model="ruleForm.name"></el-input>-->
<!--</el-form-item>-->
<!--<el-form-item label="活动区域" prop="region">-->
<!--<el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
<!--<el-option label="区域一" value="shanghai"></el-option>-->
<!--<el-option label="区域二" value="beijing"></el-option>-->
<!--</el-select>-->
<!--</el-form-item>-->
<!--<el-form-item label="活动时间" required>-->
<!--<el-col :span="11">-->
<!--<el-form-item prop="date1">-->
<!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
<!--</el-form-item>-->
<!--</el-col>-->
<!--<el-col class="line" :span="2">-</el-col>-->
<!--<el-col :span="11">-->
<!--<el-form-item prop="date2">-->
<!--<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
<!--</el-form-item>-->
<!--</el-col>-->
<!--</el-form-item>-->
<!--<el-form-item label="即时配送" prop="delivery">-->
<!--<el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>-->
<!--</el-form-item>-->
<!--<el-form-item label="活动性质" prop="type">-->
<!--<el-checkbox-group v-model="ruleForm.type">-->
<!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--</el-checkbox-group>-->
<!--</el-form-item>-->
<!--<el-form-item label="特殊资源" prop="resource">-->
<!--<el-radio-group v-model="ruleForm.resource">-->
<!--<el-radio label="线上品牌商赞助"></el-radio>-->
<!--<el-radio label="线下场地免费"></el-radio>-->
<!--</el-radio-group>-->
<!--</el-form-item>-->
<!--<el-form-item label="活动形式" prop="desc">-->
<!--<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
<!--</el-form-item>-->
<!--<el-form-item>-->
<!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
<!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--</el-form-item>-->
<!--</el-form></template>-->
<!--<script>-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--ruleForm: {-->
<!--name: '',-->
<!--region: '',-->
<!--date1: '',-->
<!--date2: '',-->
<!--delivery: false,-->
<!--type: [],-->
<!--resource: '',-->
<!--desc: ''-->
<!--},-->
<!--rules: {-->
<!--name: [-->
<!--{ required: true, message: '请输入活动名称', trigger: 'blur' },-->
<!--{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }-->
<!--],-->
<!--region: [-->
<!--{ required: true, message: '请选择活动区域', trigger: 'change' }-->
<!--],-->
<!--date1: [-->
<!--{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }-->
<!--],-->
<!--date2: [-->
<!--{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }-->
<!--],-->
<!--type: [-->
<!--{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }-->
<!--],-->
<!--resource: [-->
<!--{ required: true, message: '请选择活动资源', trigger: 'change' }-->
<!--],-->
<!--desc: [-->
<!--{ required: true, message: '请填写活动形式', trigger: 'blur' }-->
<!--]-->
<!--}-->
<!--};-->
<!--},-->
<!--methods: {-->
<!--submitForm(formName) {-->
<!--this.$refs[formName].validate((valid) => {-->
<!--if (valid) {-->
<!--alert('submit!');-->
<!--} else {-->
<!--console.log('error submit!!');-->
<!--return false;-->
<!--}-->
<!--});-->
<!--},-->
<!--resetForm(formName) {-->
<!--this.$refs[formName].resetFields();-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->
