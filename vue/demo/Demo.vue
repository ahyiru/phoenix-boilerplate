<template>
  <div class="demo">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
  import {tools} from 'yrui';
  export default {
    data(){
      return{
        name:'Hello World',
      };
    }
  }
</script>

<style lang="less" scoped>
  .demo{
    h1{
      font-size:22px;
      color:#444;
    }
  }
</style>
