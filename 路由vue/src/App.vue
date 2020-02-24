<template>
  <div id="app">
    <div>
      <router-link to="/home/news" replace active-class="active">首页</router-link>
      <!--属性:tag转换成某一中标签-->
      <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
      <router-link :to="/user/+username">用户</router-link>

      <keep-alive>
        <router-view :usernameinfo="username"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
 data(){
   return { username:'Roony'}
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
