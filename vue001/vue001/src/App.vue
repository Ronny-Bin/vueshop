<template>
  <div id="app">
    <router-view> </router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/1-002.png">
        <img slot="item-icon-active" src="./assets/img/1-001.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/2-002.png">
        <img slot="item-icon-active" src="./assets/img/2-001.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/3-002.png">
        <img slot="item-icon-active" src="./assets/img/3-001.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/member">
        <img slot="item-icon" src="./assets/img/4-002.png">
        <img slot="item-icon-active" src="./assets/img/4-001.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar'
  import TabBarItem from '@/components/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,//注意一点变量驼峰命名在template中用—代替
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
