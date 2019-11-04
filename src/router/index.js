import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login'
import axios from 'axios'
import Users from '../components/Users'
import Roles from '../components/Roles'
import Goods from '../components/Goods'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      { path: '/users', component: Users },
      { path: '/roles', component: Roles },
      { path: '/goods', component: Goods }
    ]
  },
  {
    path: '/login',
    component: Login
  }
  ]
})

// 配置axios
Vue.prototype.$axios = axios
// 给axios添加默认导航
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 给axios请求设置拦截器
axios.interceptors.request.use(
  function (config) {
  // 在发送请求之前做一些事情
    // console.log(config)
    // 每次请求都设置最新的token值
    config.headers.Authorization = localStorage.getItem('token')
    return config
  })

// 设置响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.meta.status !== 200) {
    localStorage.removeItem('token')
  }
  console.log(response)
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// 导航守卫，使用token来判断
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})
// 解决vue-router的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
