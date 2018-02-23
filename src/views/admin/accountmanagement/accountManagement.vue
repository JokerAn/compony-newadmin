<template>
 <div style="background: #e4eaec;">
   <p class="describe">
     <strong>SDN用户申请</strong>管理
   </p>
   <div class="zhanghgl">
     <div class="btn-title">
       <span class="active" @click="customerSet">用户设置</span>
       <span @click="editMima">修改密码</span>
     </div>
     <div class="toggle-content fff anclear">
       <div v-show="page1 ">
         <div class="anclear">
           <p>语言</p>
           <el-select v-model="language" placeholder="请选择" size="small">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
         </div>
         <div class="anclear">
           <p>时区</p>
           <el-select v-model="timeZone" placeholder="请选择" size="small">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
         </div>
         <div class="anclear">
           <p>每页条目数</p>
           <el-input-number size="small" :min=0 v-model="lineNum"></el-input-number>
         </div>
         <div class="anclear">
           <p>每个电脑的日志行数</p>
           <el-input-number size="small" :min=0 v-model="lineNum2"></el-input-number>
         </div>
       </div>
       <div v-show="page2">
         <div>
           <p>当前密码</p>
           <el-input type="password" icon="search" v-model="changePwd.oldPwd" :on-icon-click="showPwd"></el-input>

         </div>
         <div>
           <p>新密码</p>
           <el-input type="password" icon="search" v-model="changePwd.newPwd" @blur="regPwd(1)" :on-icon-click="showPwd"></el-input>
           <span class="zhanghuerror" v-if="changePwd.errorDiffert">两次密码不一致</span>
         </div>
         <div>
           <p>确认新密码</p>
           <el-input type="password" icon="search" v-model="changePwd.newPwd2" @blur="regPwd(2)" :on-icon-click="showPwd"></el-input>
           <span class="zhanghuerror" v-if="changePwd.errorDiffert">两次密码不一致</span>
         </div>
       </div>
       <el-button class="btn-black accountManagementbtn" v-show="page1" @click.native="savePage1">保存</el-button>
       <el-button class="btn-black accountManagementbtn" v-show="page2"  @click.native="savePage2">保存</el-button>
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
        page1:true,
        page2:false,
        options: [{
          value: '选项1',
          label: '恶魔小丑'
        }, {
          value: '选项2',
          label: '测试特制'
        }, {
          value: '选项3',
          label: '测试特制合作伙伴1'
        }, {
          value: '选项4',
          label: '测试特制合作伙伴2'
        }, ],
        language: '恶魔小丑',
        timeZone: '测试特制合作伙伴2',
        lineNum:20,
        lineNum2:30,
        changePwd:{
          oldPwd:'',
          newPwd:'',
          newPwd2:'',
          errorDiffert:false,
          errorDForgit:false,
          newPwdChanged:false,
          newPwd2Changed:false,
        },
      }
    },
    computed:mapGetters(
      ['']
    ),
    components:{

    },
    methods:{
      ...mapActions(
        []
      ),
      customerSet(){
        this.page1=true;
        this.page2=false;
        $('.btn-title>span:first-child').addClass('active')
        $('.btn-title>span:last-child').removeClass('active')
      },
      editMima(){
        this.page1=false;
        this.page2=true;
        $('.btn-title>span:first-child').removeClass('active')
        $('.btn-title>span:last-child').addClass('active')
      },
      showPwd(e){

        if($(e.target).siblings('input')[0].type=='text'){
          $(e.target).siblings('input')[0].type='password';
          $(e.target).addClass('el-icon-search');
          $(e.target).removeClass('el-icon-share');
        }else{
          $(e.target).siblings('input')[0].type='text';
          $(e.target).removeClass('el-icon-search');
          $(e.target).addClass('el-icon-share');
        }
      },
      regPwd(res){
        if(res==1){
          this.changePwd.newPwdChanged=true;
          if(this.changePwd.newPwd2Changed==true){
            this.changePwd.newPwd==this.changePwd.newPwd2?this.changePwd.errorDiffert=false:this.changePwd.errorDiffert=true
          }else{

          }
        }
        if(res==2){
          this.changePwd.newPwd2Changed=true;
          this.changePwd.newPwd==this.changePwd.newPwd2?this.changePwd.errorDiffert=false:this.changePwd.errorDiffert=true
          }
      },
      savePage1(){
        console.log('savepage1')
      },
      savePage2(){
        console.log('savepage2')
      }

    },

    created:function(){

    },
    mounted:function () {
      this.$nextTick(function () {

      })
    },



  }
</script>

<style scoped>
  .btn-title{
  margin:20px 20px 6px 20px;
  }
  .btn-title span{
    padding:7px 14px;
    background:#d6dfe2 ;
    font-size:12px;
    color: #58666e;
    border-radius:2px;
    cursor: pointer;
  }
  .btn-title span.active{
    background:#fff;
    border:1px solid #ddd;
    border-bottom:none;
    font-weight: bold;
  }
  .toggle-content{
    border:1px solid #ddd;
    color: #666;

  }
  .toggle-content>div{
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    margin: 30px 0;
    padding:20px;
  }
  .toggle-content>div>div{
    margin:10px 0;
  }
  .toggle-content>div>div>p{
    padding:5px 0;
  }

  .zhanghuerror{
    margin: 0 10px;
    color: red;
  }
  .accountManagementbtn{
    float: right;
    margin:0 30px 10px 0;
  }
  .zhanghgl .el-input-number--small{
    width:auto;
  }
</style>
