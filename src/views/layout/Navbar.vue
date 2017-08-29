<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class='inlineBlock' to="/">
          <el-dropdown-item>
            <i class="iconfont icon-yonghu2"></i>
             <span> {{userName}}</span>
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
  import { mapGetters } from 'vuex';
  import Hamburger from '@/components/Hamburger';

  export default {
    components: {
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar', 'avatar','userName'
      ])
    },

    methods: {

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
        sessionStorage.setItem("diyu", "ziyuanyu");
          location.reload();  // 为了重新实例化vue-router对象 避免bug
//        });
      },
    }
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
    z-index: 9999;
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

</style>



