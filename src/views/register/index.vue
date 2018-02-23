<template>
  <div class="">
    <div class="login_box">
      <h2>欢迎注册</h2>
      <ul id="registerInfo">
        <li><span>昵称</span><input type="text" v-model="userName"></li>
        <li><span>密码</span><input type="password" v-model="password"></li>
        <li><span>重输密码</span><input type="password" v-model="password2" ></li>
        <li><span>电话</span><input type="text" v-model="userPhone"></li>
        <li><span>邮箱</span><input type="text" v-model="userEmail"></li>
        <li><button @click="addCustomerInfo">注册</button></li>
        <li><b @click="goToPage(['login'])">已有帐号，去登录</b></li>
      </ul>
    </div></div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        userName:'1',
        password:'1',
        password2:'1',
        userPhone:'1',
        userEmail:'1',
      }
    },
    computed:mapGetters(
      ['userAge','token']
    ),
    methods: {
      ...mapActions(
        ['goToPage','changeStoreValue']
      ),

      changevalue(){
        this.fun1=function(state){
          state.userAge++;
          console.log(state.userAge)
        };
        this.changeStoreValue(this.fun1);
      },

      searchAllCustomerInfo () {
        var me =this;
        this.$axios.post(me.$urls.searchAll+'?all="all"')
          .then(function(res){
            console.log(res);
          })
          .catch(function(res){
            console.log('error');
            console.log(res);
          })
      },
      //注册
      addCustomerInfo() {
        var me=this;
        if(me.userName.trim()==''){
          alert('请全部填写完毕！');
          return
        }
        if(me.password.trim()==''){
          alert('请全部填写完毕！');
          return
        }
        if(me.password2.trim()==''){
          alert('请全部填写完毕！');
          return
        }
        if(me.password2!==me.password){
          alert('请全部填写完毕！');
          return
        }
        if(me.userPhone.trim()==''){
          alert('请全部填写完毕！');
          return
        }
        if(me.userEmail.trim()==''){
          alert('请全部填写完毕！');
          return
        }
        var datas={
          userName:me.userName, password:me.password,
          userPhone:me.userPhone, userEmail:me.userEmail
        }
        console.log(me.$qs.stringify(datas));
        this.axios({
          method: 'post',
          url: me.$urls.register,
          data: me.$qs.stringify(datas),
//          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
        })
          .then(function (response) {
            me.userName='';
            me.password='';
            me.password2='';
            me.userPhone='';
            me.userEmail='';
            alert(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      },

    },
    created() {

    },
    mounted() {

    },
  }
</script>

<style scoped="">
  .login_box{
    border:1px solid #ddd;
    display: inline-block;
    width:450px;
    position: absolute;
    top:50%;left:50%;
    padding:50px 0;
    transform: translate(-50%,-50%);
  }
  .login_box h2{color:#222ddd;text-align: center}
  #registerInfo{
    padding:20px 0;
  }
  #registerInfo li{
    text-align: center;padding: 10px 0;
  }
  #registerInfo li>span{
    width:80px;display: inline-block;
    text-align: left;
  }
  #registerInfo input{border: none;border-bottom: 1px solid #6d9443;
    outline: none;font-size: 18px;
    padding:2px 6px;box-sizing: border-box;
  }
  .login_box li>button{
    padding:10px 130px;background: #fff;border:1px solid #222ddd;cursor: pointer;
    outline: none;  color: #222ddd;font-size: 14px;font-weight: 700;border-radius: 3px;
  }
  .login_box li>button:hover{
    background: #222ddd;border-color:#222ddd;color:#fff;
  }
  .login_box li:last-child b{
    cursor: pointer;color:#6d9443;
  }
</style>
　

