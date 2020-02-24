<template>
   <div class="tab-bar-item" >
     <div v-if="!isActive"  @click="itemClick">
       <slot  name="item-icon"></slot>
     </div>
    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>
     <div :class="{active:isActive}" >
       <slot name="item-text"></slot>
     </div>
   </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path==this.path
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    font-size: 15px;
  }
  .tab-bar-item img{
    height: 25px;
    vertical-align:middle;
    margin-top: 3px;
  }
  .active{
    color: red;
  }
</style>