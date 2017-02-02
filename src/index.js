// index.js
import 'babel-polyfill'
import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
// Import HTTP Library
import axios from 'axios'
// Main App Container
import App from './components/App.vue'
import Home from './components/Home.vue'
// State Management with Vuex
import store from './store'
import hammer from 'hammerjs'

Vue.use(VueRouter)
Vue.prototype.$http = axios
Vue.prototype.$touch = hammer

let router = new VueRouter({
  mode: 'history',
  base: '~',
  // Routes go here.
  routes: [
    { path: '/', component: Home }
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
