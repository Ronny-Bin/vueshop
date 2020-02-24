//配置路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
const HomeMessage=()=>import('../components/HomeMessage');//懒加载
const HomeNews=()=>import('../components/HomeNews');


const routes=[
  {
    path:'/user/:id',
    component:User,
    meta:{
      title:'用户'
    },
  },
  {
    path:'',
    redirect:'home'
  },{
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[

      {
        path:'message',
        component:HomeMessage
      },{
        path:'news',
        component:HomeNews
      }
    ]
  },{
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    },
  }
]
//1/通过Vue.use安装插件
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode:'history'//去掉#符合
})



router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()//组件继续运行
})

//2传入vue实例

export default router