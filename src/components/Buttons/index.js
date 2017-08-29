import Buttons from './buttons.vue'
const ButtonGroup={
  install:function(Vue){//install  很是重要先记住就行 只有install的组件才能使用Vue.use()!!
    Vue.component('ButtonGroup',Buttons)
  }
};
export default ButtonGroup
