<template>
  <div class="anclear ">
    <p class="describe" :title="message">
      <strong>充值管理</strong>
    </p>

    <div class="anclear fff ancontent ancontent1" >
      <!--按钮组-->
      <!--<ButtonGroup  ref="button1" :button="applyList.buttons" ></ButtonGroup>-->
      <div class="anclear fff">
        <div class="fl zhye">
          现金余额：<span style="color: #F90;">￥</span><span style="color: #F90;">0.9</span>
        </div>
        <div class="fl chongzhi">
          <a class="el-button fl btn-black el-button--default">充值</a>
        </div>
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
        message:'页面加载于 ' + new Date().toLocaleString()
      }
    },
    methods:{

    },
    computed:{

    },

    components:{

    },
  }
</script>
<style scoped>
  .chongzhi{
    margin-left: 20px;
  }
  .el-button{
    padding:8px 14px;
  }
  .zhye{
    font-size: 16px;
  }

</style>

