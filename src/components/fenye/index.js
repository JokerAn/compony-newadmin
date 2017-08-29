import fenye from './fenye.vue'
const fenYe={
  install:function(Vue){//install  很是重要先记住就行 只有install的组件才能使用Vue.use()!!
    Vue.component('fenYe',fenye)
  }
};
export default fenYe
