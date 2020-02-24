<template>
  <div>
    <h2>我是首页</h2>
    <p>This is Index</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link :to="{path:'/home/message',query:{name:'Roony',age:22,sex:'man'}}">消息</router-link>
    <keep-alive >
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        path:'/home/news'
      }
    },
    activated() {
      this.$router.push(this.path)//添加路由z
      console.log('首页被激活');
    },
    //keep-alive钩子函数：组件消失，被缓存时调用
    deactivated() {
      console.log('首页被缓存');
    },
    created() {
      console.log('created')
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      this.path = this.$route.path
      next();
    }
  }
</script>

<style scoped>

</style>