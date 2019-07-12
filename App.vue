<template>
  <div id="app">
    <!-- 商品列表 -->
    <product></product>
    <!-- 已选商品 -->
    <cart></cart>
    <!-- 总计 -->
    <info></info>
  </div>
</template>

<script>
// 引入自定义组件
import product from './components/product'
import cart from './components/cart'
import info from './components/info'

export default {
  name: 'App',
  // 注册组件
  components: {product, cart, info}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#app h1{
  margin: 0;
}
</style>
