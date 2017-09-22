import Vue from 'vue'
import App from './App.vue'

import Appinner from './pages/Appinner.vue'
import Home from './pages/Home.vue'


import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path:'', component:Appinner, name:'appinner'},
    { path: '/home', component: Home, name:'home' }
  ]
})



new Vue({
  el: '#app',
	router:router,
  render: h => h(App)
})
