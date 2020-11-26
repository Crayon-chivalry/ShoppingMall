import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const User = () => import('@/views/user/User')
const Detailed = () => import('@/views/detailed/Detailed')

const routes =[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/detailed/:iid',
    component: Detailed
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash'
  // mode: 'history'
})

export default router


//解决路由重复点击报错
const originalPush = VueRouter.prototype.replace
   VueRouter.prototype.replace = function replace(location) {
   return originalPush.call(this, location).catch(err => err)
}