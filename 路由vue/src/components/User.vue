<template>
  <div>
    <h2>我是用户</h2>
    <p>This is Index{{usernameinfo}}{{username}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    props:['usernameinfo'],
    data(){
      return{
        username:this.$route.params.id//获取动态路由参数
      }
    }
  }
</script>

<style scoped>

</style>