import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Login
    }
  ]
})
