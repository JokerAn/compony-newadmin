<template>
  <div id="anLeftList">
    <div class="left1">
      <p v-if="userType=='editor'"><span class="admin-line" style="display: inline-block;margin:10px 0px 6px 12px;color: #fff;color: #6e6f7e;">企业特制计算服务</span></p>
      <p v-else="userType=='admin'"><span class="admin-line" style="display: inline-block;margin:10px 0px 6px 12px;color: #fff;color: #6e6f7e;">服务中心</span></p>
      <ul>
        <!--<p class="line-admin"></p>-->
        <li class="anclear" v-for="item in routes">
          <!--{{item.path}}-->
<!-- 没有下拉菜单的左侧 开始 -->
          <div v-if="!item.hidden&&item.noDropdown&&item.children.length>0">
            <span class="res-path" style="display: none">{{item.path+'/'+item.children[0].path}}</span>
            <a @click="goToPage([item.path+'/'+item.children[0].path])">
              <i  :class=item.icon> </i>
              <span>{{item.children[0].name}}</span>
            </a>
          </div>
<!-- 没有下拉菜单的左侧 结束 -->
<!-- 有下拉菜单的左侧 开始 -->
          <div v-if="!item.noDropdown&&!item.hidden">
            <a>
              <i :class=item.icon></i>
              <span>{{item.name}}</span>
              <i class="iconfont icon-sanjiao "></i>
            </a>
            <ul>
              <li v-for="child in item.children" v-if='!child.hidden'>
                <span class="res-path" style="display: none">{{item.path+'/'+child.path}}</span>
                <a @click="goToPage([item.path+'/'+child.path])" >
                  <i class="dot"></i>
                  <span>{{child.name}}</span>
                  <i></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
<!-- 有下拉菜单的左侧 结束 -->
    <div class="left2">
      <p data-v-46b0a5fa="">
        <span class="admin-line admin-cuxian">我是editer</span>
      </p>
      <ul>
        <!--<p class="line-admin"></p>-->
        <li class="anclear" v-for="item in routes">
          <!--{{item.path}}-->

          <div v-if="!item.hidden&&item.noDropdown&&item.children.length>0">
            <span class="res-path" style="display: none">{{item.path+'/'+item.children[0].path}}</span>
            <a>
              <i :class=item.icon></i>
              <span>{{item.children[0].name}}</span>
            </a>
            <ul>
              <li>
                <span class="res-path" style="display: none">{{item.path+'/'+item.children[0].path}}</span>
                <a @click="goToPage([item.path+'/'+item.children[0].path])">
                  <i class="dot"></i>
                  <span>{{item.children[0].name}}</span>
                  <i></i>
                </a>
              </li>
            </ul>
          </div>

          <div v-if="!item.noDropdown&&!item.hidden">
            <a>
              <i :class=item.icon></i>
              <span>{{item.name}}</span>
              <i class="el-icon-arrow-down "></i>
            </a>
            <ul>
              <li v-for="child in item.children" v-if='!child.hidden'>
                <span class="res-path" style="display: none">{{item.path+'/'+child.path}}</span>
                <a @click="goToPage([item.path+'/'+child.path])" >
                  <i class="dot"></i>
                  <span>{{child.name}}</span>
                  <i></i>
                </a>
              </li>
            </ul>
          </div>


        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array,
      }
    },
    data() {
      return {

      }
    },
    computed:{
      ...mapGetters(
        ['userType','permission_routers'],
      ),
    },
    methods:{
      ...mapActions(
        ['goToPage',]
      ),

    },
    created:function(){
    },
    mounted:function(){
      this.$nextTick(function () {

          if(Cookies.get('sidebarStatus')==1){
            $('.left1').hide();
            $('.left2').show();

          }else{
            $('.left2').hide();
            $('.left1').show();
          }
          //鼠标进入细条带有二级菜单 的时候 left2
          $('body').on('mouseenter', '.left2>ul>li', function () {
            $(this).children('div').children('ul').css({display:'block'})
          });
          //鼠标离开细条带有二级菜单 的时候left2
          $('body').on('mouseleave', '.left2>ul>li', function (e) {
            $(this).children('div').children('ul').css({display:'none'})
          })
          //点击left1有下拉菜单的选项
          $('body').on('click', '#anLeftList .left1>ul>li>div>a', function (event,res) {
            $(this).parent('div').parent('li').siblings('li').children('div').children('ul').slideUp(350)
            $(this).parent('div').parent('li').children('div').children('ul').stop(true,false).slideToggle(400)
            $(this).parent('div').parent('li').siblings('li').children('div').children('a').children('i:last-child').removeClass('fanzhuan');
            $(this).children('i:last-child').toggleClass('fanzhuan')


          });


        },
      )}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .svg-icon {
    margin-right: 15px;
  }
  .hideSidebar .menu-indent{
    display: block;
    text-indent: 10px;
  }
  .left2>ul>li>div>a{
    width: 200px;
    height:37px !important;
    line-height: 37px !important;
  }
  #anLeftList{}
  #anLeftList div>ul li a{
    padding:0 20px 0 16px;
    font-size: 12px;
    width: 200px;
    color: #fff;
    position: relative;
    display: block;
    height:31px;
    line-height: 31px;
  }
  #anLeftList ul>li>div ul{
    display: none;
  }
  #anLeftList div ul li a i:first-child{
    margin-right: 12px;
  }
  #anLeftList div ul li a i:last-child{
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -15px;
    transition: transform .3s;
    font-size: 12px;
  }
  #anLeftList .left2  ul li:hover{
    background: #495668;
  }
  #anLeftList .left1 ul div li:hover{
    background: #495668;
  }
  #anLeftList .left1 ul li ul{
    background:#2b2b38;
    max-height: 300px;
    /*border:1px solid #fff;*/
    overflow: auto;
  }
  .left2 ul li ul{
    position: fixed;
    left:48px;
    display: none;
    margin-top: -37px;
    background:#2b2b38;
  }
  .left2 ul li ul>li:first-child{
    /*padding-top: 10px;*/
  }
 #anLeftList .left2 ul li ul>li a{
    padding: 0px 20px 0px 16px;
    font-size: 12px;
    width: 200px;
    color: #fff;
    position: relative;
    display: block;
    height: 37px;
    line-height: 37px;
    cursor: pointer;
  }
  .fanzhuan{
    transform: rotate(180deg);
    transition:all 0.4s;
  }
  .left2 .admin-cuxian{
    margin: 0 7px;
    text-indent:-99999999em;
    border-top:3px solid rgb(63, 66, 87);
    margin-top: 15px;
    display: inline-block;
  }
</style>

