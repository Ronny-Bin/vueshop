import Vuex from 'vuex'
import Vue from "vue"
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:1000
  },
  mutations:{
    inc(state){
      state.count++
    },
    dec(state){
      state.count--
    }
  },
  getters:{
    powerCount(state){
      return state.count*1000
    }
  }
})

export default store