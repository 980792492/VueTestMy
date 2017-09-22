import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import ceshi from './modules/ceshi'


Vue.use(Vuex)

//在发布环境下关闭严格模式,以免消耗性能
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
	modules:{
		user,
		ceshi,
	},
	strict: debug
})
