import * as types from '../types'

const state = {
	ceshiNum:0,
	
}

//设置功能模块直接取到的数据参数名
const getters = {
	message: state => state.ceshiNum
}

//设置异步或者需执行的方法
const actions = {
	ceshiAction({commit}, data) {
		console.log(data)
		commit(types.GET_CESHINUM, data)
	}		
}

//同步actions的方法修改的state中的数据,
const mutations = {
	[types.GET_CESHINUM] (state, data) {
		state.ceshiNum = state.ceshiNum + data
	}
}

//暴露出去
export default {
  state,
  getters,
  actions,
  mutations
}