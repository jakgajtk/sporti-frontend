import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})


Vue.use(Vuetify)
export { app, router, store }
