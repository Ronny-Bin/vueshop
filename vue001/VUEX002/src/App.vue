<template>
  <div id="app">
    <p>Vuex管理demo</p>
    <p>{{count}}</p>
    <p>{{powerCount}}</p>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed:{
    count(){
      return this.$store.state.count
    },
    powerCount(){
      return this.$store.getters.powerCount
    }
  },
  methods:{
    inc(){
      this.$store.commit('inc')
    },
    dec(){
      this.$store.commit('dec')
    }
  }
}
</script>

<style>

</style>
