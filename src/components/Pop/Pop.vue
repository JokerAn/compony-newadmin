<template>
  <div class="popzhezhaoceng"  v-if="itemss.popTitle">
    <div class="pop">
      <h3 class="clear">{{itemss.popTitle}} <span class="fr" @click="popClose" >×</span></h3>
      <slot></slot>

      <!--两端 popq-q ，左侧 popqq-left ,右侧 popqq-right -->
      <div class="popqq clear popqq-right">
        <el-button class="btn-black"  @click="popClose">取消</el-button>
        <el-button class="btn-black" @click="okOk(itemss.fun)">确定</el-button>
        <!--<a href="javascript:;" class="btn btn-andefault" ng-click="popHide('index2Popcj')">取消</a>-->
        <!--<a href="javascript:;" class="btn btn-andefault">确定</a>-->

      </div>
    </div>

  </div>

</template>
<script >
  export default {
    props:['itemss'],
    data(){
      return{

      }
    },
    methods:{
      popClose(){
        this.itemss.popTitle=''
      },
      okOk(callback){
        //dosomething....
        callback();
        this.itemss.popTitle=''
      }
    },
    mounted:function(){

    },
    computed:{

    },
    components:{


    },



  }
</script>
<style >
  .pop {
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    border:1px solid #aaa;
    background-color: #fff;
    width:500px;

  }
  .popzhezhaoceng{
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    background: rgba(0,0,0,0.5);
    outline: 0;
  }
  .pop>h3{
    background: #fff;
    padding:14px 0 14px 20px;
    font-size: 18px;
    font-weight:normal;
    border-bottom: 1px solid #ccc;
    color: #000;
  }
  .pop>h3 span{
    padding: 14px 15px;
    margin: -14px 0;
    cursor: pointer;
    font-size: 20px;
  }




  /*弹出框内部*/
  .an-width150 li:after{
    content: '';
    display: block;
    overflow: hidden;
    clear: both;
  }
  .popContent ul li{
    padding:5px 0;
  }
  .popContent ul li div{
    float: left;
    text-align: right;
    padding:0 5px ;
  }
  .popContent ul li div:last-child{
    text-align: left;
  }
  /*.an-width150   {*/
  /*padding: 0 0 0 60px;*/
  /*}*/
  .an-width150 li div:first-child {
    width: 150px;
  }
  .popContent select{
    width:150px
  }
  .popContent select option{
    color: blue;
  }




  .pop .popContent{
    padding:20px;
    overflow-y: auto;
    min-height:100px;
    max-height: 400px;
  }
  .pop .popContent input  {
    border:1px solid #ddd;
  }
  .pop .popqq{
    height:50px;
    width:100%;
    border-top:1px solid #aaa;
    position: absolute;
    bottom:-49px;
    background-color: #fff;
  }
  .pop .popqq button{
    margin: 8px 20px;
  }
  /*在左侧*/
  .pop .popqq-left button:first-child{
    margin-right:0 ;
  }

  /*在右侧*/
  .pop .popqq-right{
    text-align: right;
  }
  .pop .popqq-right button:first-child{
    margin-right:0;
  }

  /*在两边*/
  .pop .popq-q a.btn:first-child{
    float: left;
  }
  .pop .popq-q a.btn:last-child{
    float: right;
  }
</style>
