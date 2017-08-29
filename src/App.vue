<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import '../node_modules/element-ui/lib/theme-default/index.css'; // element插件css
  @import 'css/iconfont.css'; // 字体css样式

  @import 'css/index.scss'; // 全局自定义的css样式
</style>


