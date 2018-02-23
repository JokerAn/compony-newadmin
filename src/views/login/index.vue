<template>
  <div>
    <div class="asdf">
      <div class="login_box" >
        <h2 style="text-align: center">登录</h2>
        <ul id="registerInfo2">
          <li><span >昵称</span><input type="text" v-model="userName"></li>
          <li><span>密码</span><input type="password" v-model="pwd"></li>
        </ul>
        <p><button @click="login">登录</button><button @click="goToPage(['register'])">注册</button></p>
        <p style="text-align: center">管理员帐号为admin 密码为admin</p>
        <p style="text-align: center">普通客户帐号为　1 密码为 1</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        userName:'',
        pwd:'',
      }
    },
    computed:mapGetters(
      ['userAge','token']
    ),
    methods: {
      ...mapActions(
        ['refresh','changeStoreValue','goToPage']
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
        this.axios.post(me.$urls.searchAll+'?all="all"')
          .then(function(res){
            console.log(res);
          })
          .catch(function(res){
            console.log('error');
            console.log(res);
          })
      },
      //登录login
      login() {
        var me=this;
        var datas={
          userName:me.userName,
          password:me.pwd,
        }
        this.axios({
          method: 'post',
          url: me.$urls.login,
          data: me.$qs.stringify(datas),
//          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }//form表单提交才需要吧　我也不知道　留着别删除
        })
          .then(function (response) {
//            console.log(response.data.info);
            if(response.data.info=='success'){
              if(me.userName.indexOf('admin')!==-1){
                me.$cookies.set('Admin-Token','admin');
              }else {
                me.$cookies.set('Admin-Token', 'editor');
              }
              me.$cookies.set('longtelUserName', me.userName);
              me.$cookies.set('sidebarStatus',0);
              me.token=me.$cookies.get('Admin-Token');
              me.router.push({ path: '/' });
              location.reload();
//              console.log(me.$cookies.get('customer-Token'));
//              console.log(me.userName);
            }else{
              alert('用户名或者密码错误')
            }
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
  .asdf{
    position: absolute;
    width: 100%;
    border: 10px solid;
    height: 100%;
    background:url(../../../static/imgs/newyears/yanhua.gif)no-repeat center center;
    background-size:cover ;
  }
  .login_box{
    border:1px solid #ddd;
    display: inline-block;
    width:450px;
    position: absolute;
    top:50%;left:50%;
    padding:50px 0;
    transform: translate(-50%,-50%);
    background-color: #fff;/*happynewyears*/
  }
  h2{color:#222ddd}
  #registerInfo2{
    padding:20px 0;
  }
  #registerInfo2 li{
    text-align: center;padding: 10px 0;
  }
  #registerInfo2 li>span{
    width:80px;display: inline-block;

  }
  #registerInfo2 input{border: none;border-bottom: 1px solid #6d9443;
    outline: none;font-size: 18px;
    padding:2px 6px;box-sizing: border-box;
  }
  .login_box p>button{
    padding:5px 40px;background: #fff;border:1px solid #222ddd;
    outline: none;  color: #222ddd;font-size: 18px;font-weight: 700;
    margin-left:100px;
  }
  .login_box p>button:last-child{
    margin-left:40px;
  }
</style>
　

