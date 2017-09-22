import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/pages/Home'
import Activity from '@/pages/activity'
import My from '@/pages/My'

import AppInner from '@/pages/AppInner' 




import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
//  {path: '/', name: 'Hello', component: Hello },

		{path:'',component:AppInner,name:'appinner',
			children:[
    		{path:'', component:Home, name: 'index' },
    		{path:'home', component:Home, name: 'home' },
    		{path:'activity', component:Activity, name: 'activity' },
    		{path:'my', component:My, name: 'my' },
			]
		
	},
	{path:'/detail/:id',component:Detail,name:'detail'},
		
		
		



//  { path:'*',components:Home,name:'home'}


    
  ]
})
