import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Box1 from '@/components/Box1'
import Box2 from '@/components/Box2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
       { path: '/box1',  name: 'box1', component: Box1 },
       { path: '/box2', name: 'box2', component: Box2 }, 
      ]
    },
   
   
  ]
})
