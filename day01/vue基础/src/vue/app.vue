<template>

  <div>
    <h3>{{message}}</h3>
    <p class="title">{{message}}</p>
  </div>

</template>

<script>
  export default {
    name:'app',
    data() {
      return{
        message:'Helloword'
      };
    }
  }
</script>
<style scoped="">
  .title{
    color: red;
  }
</style>