<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  .tab-bar{
    display: flex;
    text-align: center;
    height: 49px;
    background-color:#f6f6f6;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    box-shadow:0px -2px 4px  rgba(100,100,100,0.1);
  }
</style>