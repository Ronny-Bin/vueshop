##VueX 的使用

###什么是VUEX
它是一个专为 Vue.js 应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态。

### 安装vuex

```vue
npm install vuex --save
```
#####在main.js中添加
```
import Vuex from 'vuex'
Vue.use( Vuex );
const store = new Vuex.Store({
    //待添加
})
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
```
###1、State
官方：Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

通俗：state就是Vuex中的公共的状态, 将state看作是所有组件的data, 用于保存所有组件的公共数据。

```vue
const store = new Vuex.Store({
  state: {
    count: 0
  },
})

const app = new Vue({
  el: '#app',
  computed: {
    count () {
        return store.state.count
    }
  },
  methods: {
    inc () {
      this.count++
    },
    dec () {
      this.count--
    }
  }
})
```
###2、Getter


通俗的理解可以认为是getter里的函数就是vuex里的计算属性
```vue
const store = new Vuex.Store({ 
       state: {
            count: 0 
       },
       getters: {  // getters
            countAdd: function (state) {
                 return state.count++
            }
       }
 })

computed: {
    count () {
        return store.getters.countAdd
    }
  },
```
###3、Mutations
官方：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
通俗：将mutaions理解为store中的methods
```vue
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
      inc: state => state.count++,
      dec: state => state.count--
  }
})
const app = new Vue({
  el: '#app',
  computed: {
    count () {
        return store.state.count
    }
  },
  methods: {
    inc () {
      store.commit('inc')
    },
    dec () {
        store.commit('dec')
    }
  }
})
```

###4、Actions
Action 类似于 mutation，不同在于：
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作！！！mutations中绝对不允许出现异步
```vue
actions: {
  incAsync ({ commit }) {
    setTimeout(() => {
      commit('inc')
    }, 1000)
  }
}
```
###5、Modules

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。

```vue
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

