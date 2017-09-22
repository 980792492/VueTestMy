import * as types from '../types'

const state = {
	userage: 24,
	userdata: null
}


//设置功能模块直接取到的数据参数名
const getters = {
	myUserData: state => state.userdata
}


//设置异步或者需执行的方法
const actions = {
	getuserdata({commit, state}, {username: username}) {
//		const username = 'TJH',
		
		commit(types.GET_USER_DATA, username)
	}
		
}

//同步actions的方法修改的state中的数据,
const mutations = {
	[types.GET_USER_DATA] (state, username) {
		state.userdata = username
	}
}


//暴露出去
export default {
  state,
  getters,
  actions,
  mutations
}