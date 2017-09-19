<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
     <div class="gongdanbox">
       <i class="iconfont icon-rizhi"></i>
       工单
       <div class="gongdan">
         <div class="dan111">
           <el-button  @click="xinjian"   style="    margin: 9px;background-color: #324157;color: #fff;padding: 7px 8px;">
             <i class="iconfont icon-chuangjian1 symbol" style="    margin: 0 2px;"></i>
             新建工单
           </el-button>
           <a href="javascript:;" style="color:#20a0ff;display: inline-block;margin-left: 156px;">>>全部工单</a>
           <div class="dan111cont">
             当前你有<span>0</span>个未解决的工单
           </div>
         </div>
       </div>
       <Pop v-if="pop1.popTitle" :itemss="pop1" >
         <p>新建工单</p>
       </Pop>
     </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class='inlineBlock' to="/">
          <el-dropdown-item>
            <i class="iconfont icon-yonghu2"></i>
             <span> {{longtelUserName}}</span>
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">
            <i class="iconfont icon-tupianshanchu"></i>
            退出登录
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
  import Cookies from 'js-cookie';
  import { mapGetters ,mapActions} from 'vuex';
  import Hamburger from '@/components/Hamburger';
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'

  export default {
    data () {
      return {
        pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },
      }
    },
    components: {
      ElButton,
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar', 'avatar','longtelUserName'
      ])
    },
    methods: {
      ...mapActions(
        ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','getDates','pop']
      ),

      xinjian(){
        this.pop(['新建工单',this.pop1])
      },
      pop1fun(){//对划价进行的一系列的操作
        console.log('点击了新建工单的确定');
      },
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar');
        if($('.app-wrapper.anclear').hasClass('hideSidebar'))
        {
          $(' .logo-img1').show();
          $(' .logo-img2').hide();
        }
        else{
          $(' .logo-img2').show();
          $(' .logo-img1').hide();
        }
      },

      logout() {
//        this.$store.dispatch('LogOut').then(() => {
          Cookies.remove('Admin-Token');
        localStorage.setItem("diyu", "fuwuyu");
          location.reload();  // 为了重新实例化vue-router对象 避免bug
//        });
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .navbar {
    color: #fff;
    height: 48px;
    position: fixed;
    width: 100%;
    min-height: initial;
    line-height: 48px;
    z-index: 99;
    border-radius: 0px !important;
    background-color: #fff;
    box-shadow: 2px -1px 7px 1px #bbb;
    .hamburger-container {
      line-height: 50px;
      height: 50px;
      float: left;
      color: #000;
      padding: 0 10px;
    }
    .errLog-container {
      display: inline-block;
      position: absolute;
      right: 150px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }

    .avatar-container {
      height: 50px;
      display: inline-block;
      position: fixed;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .gongdanbox{
    position: absolute;
    top:0;
    left:-260px;
    font-size:12px;
    border-right:1px solid #ccc;
    border-left:1px solid #ccc;
    padding: 0px 30px 0px 20px;
    cursor:pointer;
    i{
      margin:0 10px;
    }
    .gongdan{
      position: relative;
      top: -48px;
      display: none;
      left:-246px;


      .dan111{
        position: absolute;
        left: -1px;
        top:48px;
        border:1px solid #ccc;
        border-top:none;
        background:#fff;
        width:340px;


        .dan111cont{
          background: #f8f8f8;
          padding: 0px 16px;
          line-height: 36px;
          height: 36px;
        }
      }
    }
  }
  .gongdanbox:hover{
    .gongdan{
      display: block;
    }
  }

</style>



