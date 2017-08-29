import Tables from './tables.vue'
const TablesData={
  install:function(Vue){//install  很是重要先记住就行 只有install的组件才能使用Vue.use()!!
    Vue.component('TablesData',Tables)
  }
};
export default TablesData
