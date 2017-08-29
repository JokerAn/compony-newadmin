// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import routerconfig from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'normalize.css/normalize.css'
// import IconSvg from '@/components/Icon-svg/index.vue'
import ButtonGroup from './components/Buttons'
import TablesData from './components/Tables'
import fenYe from './components/fenye'
import Pop from './components/Pop'
import  './js/jquery'

Vue.use(VueRouter);
Vue.config.productionTip = false


Vue.prototype.axios = axios;

Vue.use(ElementUI);
Vue.use(ButtonGroup);
Vue.use(TablesData);
Vue.use(fenYe);
Vue.use(Pop);
// Vue.component('icon-svg', IconSvg)

var router;
function aaaa(){
  // Cookies.set('Admin-Token', data.token);
  store.state.mutations.userType=store.getters.token;
  if (store.state.mutations.leftrouter.length === 4) {
    var lsrouter=store.state.mutations.routerconfigs.routes;
    var lengths=store.state.mutations.routerconfigs.routes.length;

    // console.log(store.state.mutations.userType)
    if(store.state.mutations.userType=='admin'){
      //筛选带admin的然后放到leftrouter中
      for(var i=0;i<lengths;i++){
        if(lsrouter[i].meta!==undefined){
          if(lsrouter[i].meta.role!==undefined){
            if(lsrouter[i].meta.role.indexOf('admin')!==-1){
              store.state.mutations.leftrouter.push(lsrouter[i]);
            }else{}
          }else{}
        }
      }

    }
    else if(store.state.mutations.userType=='editor'){
      //筛选带editor的然后放到leftrouter中
      // console.log(222);
      for(var i=0;i<lengths;i++){
        if(lsrouter[i].meta!==undefined){
          if(lsrouter[i].meta.role!==undefined){
            if(lsrouter[i].meta.role.indexOf('editor')!==-1){
              store.state.mutations.leftrouter.push(lsrouter[i]);
            }else{}
          }else{}
        }
      }
      for(var i=0,arr=store.state.mutations.leftrouter.length;i<arr;i++){
        if(store.state.mutations.leftrouter[i].diyu!==undefined){
          if(store.state.mutations.leftrouter[i].diyu.indexOf('ziyuanyu')!==-1){
            store.state.mutations.ziyuanyu.push(store.state.mutations.leftrouter[i])
          }
          else if(store.state.mutations.leftrouter[i].diyu.indexOf('fuwuyu')!==-1){
            store.state.mutations.fuwuyu.push(store.state.mutations.leftrouter[i])}
        }
      };
      // console.log(store.state.mutations.fuwuyu.length);


      store.state.mutations.leftList=$.extend([],store.state.mutations.leftrouter);
      // console.log(store.state.mutations.leftList);
      // console.log(store.state.mutations.leftrouter);
      // for(var i=0,arr=store.state.mutations.leftList.length;i<arr;i++){
      for(var i=0;i<store.state.mutations.leftList.length;i++){
        if(store.state.mutations.leftList[i].diyu!==undefined){
          // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
          // console.log('被循环的是--'+store.state.mutations.leftList[i].diyu+' 姓名是--'+store.state.mutations.leftList[i].name)
          // console.log(store.state.mutations.leftList[i]);
          if(store.state.mutations.leftList[i].diyu.indexOf('fuwuyu')!==-1){
            // console.log('aaaaaaa-'+i)
            store.state.mutations.leftList.splice(i,1);
            i=i-1;
          }else{
            // console.log('我不是服务域--'+store.state.mutations.leftList[i].diyu)
          }
          // console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
        }else{}
      }
      // console.log(store.state.mutations.leftList);
      // console.log(store.state.mutations.leftrouter);

    }else{
      // console.log('用户类型既不是admin也不是editor');
    }
    // console.log(store.state.mutations.leftrouter);

  }

}
aaaa();
router=new VueRouter({routes:store.state.mutations.leftrouter});//最好将www声明为router 方便地下的书写
// console.log(store.state.mutations.leftrouter);
Vue.prototype.router = router;
store.state.mutations.getVueRouter=router




const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  // console.log('-----------我是to------------');
  // console.log(to);
  // console.log('-----------我是to------------');
  //
  // console.log('-----------我是from------------');
  // console.log(from);
  // console.log('-----------我是from------------');
  //
  // console.log('-----------我是next------------');
  // console.log(next);
  // console.log('-----------我是next------------');

  NProgress.start();
  store.state.mutations.userType=store.getters.token;
  if (store.getters.token!=='undefined'&&store.getters.token!==undefined) {
    // console.log(store.getters.token)
    // console.log(store.state.mutations.leftrouter);
    if (to.path === '/login') {

      next({ path: '/' });
    }else {
      // console.log(1);
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login');
      NProgress.done();
    }
  }
});

// location.reload();
router.afterEach(() => {
  NProgress.done();
});



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
