<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    <div>
      <img src="../../images/testlogo.png" alt="">
    </div>
    <hr>
    <div class="aasdf">

    </div>

  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
      name: 'dashboard',
      computed: {
        ...mapGetters([
          'name',
          'roles'
        ])
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
  .aasdf{
    width:200px;
    height:200px;
    border:1px solid #ddd;
    background:url("../../images/testlogo.png")no-repeat center center;
  }
</style>
