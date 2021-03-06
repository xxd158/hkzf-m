import Vue from 'vue'
import VueRouter from 'vue-router'
// 一级文件
import LayOut from '@/views/LayOut'
// 二级文件懒加载
const Login = () => import('@/views/Login')
const My = () => import('@/views/My')
const ShouYe = () => import('@/views/ShouYe')
const ZhaoFang = () => import('@/views/ZhaoFang')
const ZiXun = () => import('@/views/ZiXun')
const CityList = () => import('@/views/CityList')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  {
    path: '/layout',
    component: LayOut,
    redirect: '/shouye',
    children: [
      { path: '/my', component: My, name: 'my' },
      { path: '/shouye', component: ShouYe },
      { path: '/zhaofang', component: ZhaoFang },
      { path: '/zixun', component: ZiXun }
    ]
  },
  { path: '/login', component: Login },
  { path: '/city', component: CityList, name: 'CityList' }
]

const router = new VueRouter({
  routes
})

export default router
