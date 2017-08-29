<template>
    <div class="app-wrapper anclear" :class="{hideSidebar:!sidebar.opened}">
        <div class="sidebar-wrapper anclear">
          <div class="logo-img logo-img1" @click="goToPage(['/dashboard'])"></div>
          <div class="logo-img logo-img2" @click="goToPage(['/dashboard'])"></div>
            <sidebar class="sidebar-container anclear"></sidebar>
        </div>
        <div class="main-container anclear">
            <navbar></navbar>
          <Levelbar></Levelbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar,Levelbar, AppMain } from '@/views/layout';
    import {mapGetters,mapActions} from 'vuex'
    export default {
      name: 'layout',
      components: {
        Navbar,
        Levelbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      },
      monted:function () {

      },
      methods:{
        ...mapActions(
          ['goToPage']
        ),
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../css/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-wrapper {
              width: 48px;
            }
            .main-container {
                margin-left: 48px;
            }
        }

        .sidebar-wrapper {
            width: 201px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;

            /*transition: all .28s ease-out;*/
          .logo-img{
            cursor: pointer;
            width: 200px;
            height:48px;
            position: absolute;
            top:0;
            left:0;
            z-index:1002;
            background:url("../../images/logo.png")no-repeat center center #353644;
            background-size:84% ;
          }
          .logo-img2{
            cursor: pointer;
            width: 48px;
            height: 48px;
            position: absolute;
            display: none;
            top: 0;
            left: 0;
            z-index: 1002;
            background: url("../../images/favicon.png")no-repeat center center #353644;
            background-size: 56%;
          }
        }
        .sidebar-container {
            /*transition: all .28s ease-out;*/
            position: absolute;
            top: 48px;
            bottom: 0;
            left: 0;
            right: -17px;
            overflow-y: auto;
            width:200px;
          background: #22222c;
        }
        .main-container {
            min-height: 100%;
            /*transition: all .28s ease-out;*/
            margin-left: 201px;
        }
    }
    .hideSidebar .el-menu--dark .el-submenu.aaa{
      position:fixed;
      left:48px;
      margin-top:-30px;
      display:block!important;
    }
    .app-levelbar.el-breadcrumb{
      padding-top: 50px;
    }

</style>
