<template>
  <ul class="anclear fl button-pop">
    <li class="fl" v-for="item in button">
      <el-button @click="buttonClick(item)"  :emit="item.emit" :icon='item.icon' :url="item.url">{{item.name}}</el-button>
      <!--<el-button  :icon='item.icon' :url="item.url" :emit="item.emit">{{item.name}}</el-button>-->
    </li>
  </ul>
</template>
<script>

  import {mapGetters,mapActions} from 'vuex'
  export default{
    props:['button'],
    methods:mapActions(
      ['buttonClick',]
    )
  }
</script>
<style>
  .button-pop li{
    margin: 10px 5px;
  }
  .button-pop li button{
    background-color: #324157;
    color: #fff;
  }
</style>
