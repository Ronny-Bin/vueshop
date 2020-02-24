<template>
  <div>
    <ul>
      <li>测试</li>
      <li>{{$route.query.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeMessage",

    data(){
      return{
        //name:this.$route.params.name//获取动态路由参数
      }
    },
    created() {
      console.log('created')
    },
    destroyed() {
      console.log('destroyed')
    }
  }
</script>

<style scoped>

</style>