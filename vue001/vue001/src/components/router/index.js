import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home')
const Cart = ()=>import('../views/cart/Cart')
const Category = ()=>import('../views/category/Category')
const Member = ()=>import('../views/member/Member')


const  routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/member',
    component:Member
  }
]

Vue.use(VueRouter)
const router = new VueRouter(
    {
      routes,
      mode:'history'
    }
)


router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()//组件继续运行
})
export default router














