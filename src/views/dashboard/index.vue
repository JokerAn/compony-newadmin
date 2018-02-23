
<template>
  <div class="zonglan-content anclear">
    <div class="zonglan-con-left  fl">
      <div class="anclear zonglan-con-left1 ">
        <ul class="fl">
          <li><span class="morning">{{Morning}} !</span></li>
          <li><span><b>{{userIdName}}</b></span></li>
          <li v-if="renzhengTure"><p>已经认证</p></li>
          <li v-else><p>未认证 , <a @click="goToPage(['/console/excelserver/accountManagement'])">立即认证</a></p></li>
        </ul>
        <ul class="fl">
          <li><span>账户余额 :</span></li>
          <li><span><b>{{money}}</b><span> 元</span></span></li>
          <li>
            <p>
              <button>充值</button>
              <a @click="goToPage(['/console/excelserver/accountManagement'])">用户中心</a>
              <span class="shuxian">|</span>
              <a @click="goToPage(['/console/excelserver/accountOverview'])" >费用中心</a></p>
          </li>
        </ul>
      </div>
      <div class="zonglan-con-left2 ">
        <div>
          <p>企业特制计算服务</p>
          <h6 class="line1"></h6>
          <ul>
            <li>
              <div>
                <b class="zonglan-yunzhuji"></b><span class="fr">电脑</span>
              </div>
              <p><span>您尚未购买电脑 , </span><a @click="listenChildMsg('/console/cloudHost')"> 点击购买</a></p>
            </li>
            <li>
              <div>
                <b class="zonglan-juan"></b><span class="fr">卷</span>
              </div>
              <p><span>您尚未购买卷 , </span><a  @click="listenChildMsg('/console/volume')" > 点击购买</a></p>

            </li>
            <li>
              <div>
                <b class="zonglan-sywl"></b><span class="fr">私有网络</span>
              </div>
              <p><span>您尚未购买私有网络 , </span><a  @click="listenChildMsg('/console/privateNetwork')" > 点击购买</a></p>

            </li>
          </ul>
        </div>
         <div>
          <p>特制安全防护服务</p>
          <h6 class="line1"></h6>
          <ul>
            <li>
              <div>
                <b class="zonglan-yunwg"></b><span class="fr">特制网关</span>
              </div>
              <p><a @click="goToPage(['/console/excelserver/cloudGateway'])"> 点击进入</a></p>
            </li>
            <li>
              <div>
                <b class="zonglan-yunKD"></b><span class="fr">特制抗D</span>
              </div>
              <p><a @click="goToPage(['/console/cloudKD'])" > 点击进入</a></p>

            </li>
          </ul>
        </div>
        <div>
          <p>特制安全防护服务</p>
          <h6 class="line1"></h6>
          <ul>
            <li>
              <div>
                <b class="zonglan-yunjk"></b><span class="fr">特制监控</span>
              </div>
              <p><a @click="goToPage(['/console/excelserver/cloudWatch'])"> 点击进入</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="zonglan-con-right fr">
      <p><span>最近登录</span><a @click="goToPage(['/console/customer!logoperate'])">查看全部</a></p>
      <div class="denglutime">
        <ol>
          <li class="anclear">
            <div class="fr">

            </div>
            <div class="time-id fr">
              <p>2017-08-31 11:26:31</p>
              <p><span>登录IP :</span> <a  >192.168.94.88</a></p>
            </div>

          </li>
          <li class="anclear">
            <div class="fr">

            </div>
            <div class="time-id fr">
              <p>2017-08-31 11:26:31</p>
              <p><span>登录IP :</span> <a  >192.168.94.88</a></p>
            </div>

          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from '../../js/bus.js';
  import Cookies from 'js-cookie';
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        Morning:'早上好',
        userIdName:'anshunli',
        money:0.1,
        renzhengTure:false,
      }
    },
    computed: {
      ...mapGetters([
        'token','longteluserName',
        'leftrouter','sidebar','userType','fuwuyu','ziyuanyu',
        'leftList',,
      ])
    },
    methods: {
      ...mapActions(
        ['goToPage']
      ),
      listenChildMsg(res){
        Bus.$emit('newNodeEvent',res)
      }

    },
    mounted:function () {
//      console.log(this.loginForm.email);
//      console.log(this.loginForm.password);

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .zonglan-content{
    width: 100%;
    min-width: 1000px;
    padding: 20px 20px;

    .zonglan-con-left{
      width:70%;
      >div{
        background-color: #fff;
        margin-bottom:30px;
        padding:20px;
      }

      >div:first-child ul{
        width:300px;
        li{
          padding:8px 0;
          .morning{
            font-size:14px
          }
          a{
            padding:0 5px;
            color: #1f90c8;
          }
          span{
            b{
              font-size:20px;
              font-weight: 400;
            }
            span{
              color: #999;
              font-size: 12px;
            }
          }
          button{
            padding: 4px 12px;
            margin-right: 14px;
            color: #fff;
            border: 1px solid #28b5d6;
            background-color: #28b5d6;
          }
          .shuxian{
            margin:0 10px;
            color: #1f90c8;
          }
        }
      }
      .zonglan-con-left2{
        div{
          >p{
            padding:15px 0;
            color: #333;
            font-size: 18px;
          }
          ul{
            display: -webkit-flex; /* Safari */
            padding:20px 0;
            li{
              div{
                b{
                  display: inline-block;
                  width:40px;
                  height:40px;
                }
                b.zonglan-yunzhuji{
                  background: url(../../images/zonglanall.png) -53px -179px no-repeat
                }
                b.zonglan-juan{
                  background: url(../../images/zonglanall.png) -101px  -179px no-repeat

                }
                b.zonglan-sywl{
                  background: url(../../images/zonglanall.png) -210px -205px no-repeat

                }
                b.zonglan-yunwg{
                  background: url(../../images/zonglanall.png) -160px -121px no-repeat

                }
                b.zonglan-yunKD{
                  background: url(../../images/zonglanall.png) -305px -5px no-repeat

                }
                b.zonglan-yunjk{
                  background: url(../../images/zonglanall.png) -205px -55px no-repeat

                }
                span{
                  line-height: 40px;
                }
              }
              p{
                margin:30px 0;
                a{
                  color: #1f90c8;
                }
              }

            }
            li:nth-child(2){
              margin:0 30px;
            }
        }


        }
      }

    }
    .zonglan-con-left2 div ul li{
      width:190px;
      height:190px;
      padding:20px 10px;
      background: #f8f8f8;
      color: #4f4f4f;
    }
    .zonglan-con-left2>div:nth-child(1) ul li{
      border-bottom:4px solid #34bf75;
    }
    .zonglan-con-left2>div:nth-child(1) ul li:hover{
      box-shadow: 0 0 3px 1px #46e490;
    }
    .zonglan-con-left2>div:nth-child(2) ul li{
      border-bottom:4px solid red;
    }
    .zonglan-con-left2>div:nth-child(2) ul li:hover{
      box-shadow: 0 0 3px 1px red;
    }
    .zonglan-con-left2>div:nth-child(3) ul li{
      border-bottom:4px solid #002060;
    }
    .zonglan-con-left2>div:nth-child(3) ul li:hover{
      box-shadow: 0 0 3px 1px #002060;
    }
    .zonglan-con-right{
      width:28%;
      height:600px;
      background-color: #fff;
      padding:20px;
      >p{
        span{
          font-weight: 700;
          font-size: 16px;
          margin-right:10px;
        }
      }
    }
    .denglutime{
      padding:10px;
      color: #777777;
      ol{
        li{
          margin-bottom:20px ;
          width: 100%;
          div.fl{
            width:15%;
          }
          div.fr{
            width:85%;
          }
        }
      }
    }
    .time-id{
      padding:10px;
      background:#f8f8f8;
      p{
        padding: 5px 0;
      }
    }

  }
</style>

