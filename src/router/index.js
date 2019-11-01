import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/home',
  name: 'home',
  component: Home
},
{
  path: '/login',
  component: Login
}
]

const router = new VueRouter({
  routes
})

export default router
