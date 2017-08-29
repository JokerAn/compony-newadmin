<template>
  <div >
    <div  v-if="userType=='editor'">
      <i v-if="value==2" class="dituhong diyuicon"></i>
      <i v-else="value==1" class="ditulan diyuicon"></i>
    </div>


    <el-select class="left-select" v-if="userType=='editor'"size="small" v-model="value" @change="diyu">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!--<el-menu mode="vertical" theme="dark" :default-active="$route.path" :unique-opened=true>-->
      <sidebar-item :routes='leftListShow'></sidebar-item>
    <!--</el-menu>-->
  </div>

</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import SidebarItem from './SidebarItem';
  export default {
    data() {
      return {
        options: [{
          value: 1,
          label: '资源域'
        }, {
          value: 2,
          label: '服务域'
        } ],
        value: '资源域',
        firstckick:false,
        leftListShow:[],

      }
    },
    components: { SidebarItem },
    computed: {
      ...mapGetters([
        'permission_routers','sidebar','userType','fuwuyu','ziyuanyu',
        'leftList','getVueRouter',
      ])
    },
    methods:{
      ...mapActions(
        ['leftblue','leftblue50']
      ),
      diyu(res){
        if(res==1&&this.firstckick){
          this.firstckick=false;//让他只有第一次能进来 因为默认页面展示资源域 但是 selection 还可能在一次重复选择资源域 所以让他下次只能点击服务域才发生事件
          console.log(this.leftList)
          for(var i=0;i<this.leftListShow.length;i++){
            if(this.leftListShow[i].diyu!==undefined){
              if(this.leftListShow[i].diyu.indexOf('fuwuyu')!==-1){
                this.leftListShow.splice(i,1);
                i--;
              }else{}
            }
          }
//          this.leftListShow=this.leftListShow.concat(this.ziyuanyu).reverse()
          this.leftListShow=this.ziyuanyu.concat(this.leftListShow)
          this.$router.push({path:'/console/survey'});
          sessionStorage.setItem("diyu", "ziyuanyu");
        }else if(res==2&&!this.firstckick){
          this.firstckick=true;
          for(var i=0;i<this.leftListShow.length;i++){
            if(this.leftListShow[i].diyu!==undefined){
              if(this.leftListShow[i].diyu.indexOf('ziyuanyu')!==-1){
                this.leftListShow.splice(i,1);
                i--;
              }
              else {}
            }
          }
          this.leftListShow=this.fuwuyu.concat(this.leftListShow)
          this.$router.push({path:'/console/excelserver/cloudGateway'})
          sessionStorage.setItem("diyu", "fuwuyu");
        }
        setTimeout(function(){
          this.leftblue()
        }.bind(this),9)
        $( 'li').children('div').children('a').children('i:last-child').removeClass('fanzhuan');

      },
      editorOrAdmin(){
        if(this.userType=='editor'){
          this.leftListShow=$.extend([],this.leftList);
          if(sessionStorage.getItem("diyu")=='fuwuyu'){
            for(var i=0;i<this.leftListShow.length;i++){
              if(this.leftListShow[i].diyu!==undefined){
                if(this.leftListShow[i].diyu.indexOf('ziyuanyu')!==-1){
                  this.leftListShow.splice(i,1);
                  i--;
                }
                else {}
              }
            }
            this.leftListShow=this.fuwuyu.concat(this.leftListShow)
            this.value=2;
            this.firstckick=true;
          }
        }else{
          this.leftListShow=this.permission_routers;
        }
      }
    },
    created:function(){

    },
    mounted:function () {
      this.$nextTick(function () {
        this.getVueRouter=this.router;
        this.editorOrAdmin();
      })
    }
  }
</script>

<style>
  .el-menu {
    min-height: 100%;
  }
  .left-select .el-input__inner{
    background: #22222c;
    border:none;
    color: #fff;
    padding-left: 49px;
    padding-right: 9px;

  }
  .left-select{
    border-bottom:1px solid #333;
    width:100%;
    padding:8px 0;
  }
  .diyuicon{
    position: fixed;
    top: 64px;
    left: 18px;
    background-color: #fff;
    z-index: 1500;
  }
  .left2 .anclear>div>a>span{
    margin-left:10px;
  }
  .left-select .el-input__icon.el-icon-caret-top{
    margin: 0 10px 0 0;
  }
  .dituhong{
    width: 10px;
    height: 14px;
    float: left;
    background: url('../../images/o_region.png') no-repeat;
    display: inline-block;
  }
  .ditulan{
    width: 10px;
    height: 14px;
    float: left;
    background: url('../../images/o_region2.png') no-repeat;
    display: inline-block;
  }

</style>
