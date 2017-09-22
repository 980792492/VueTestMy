import Constant from  './Constant'
import axios from 'axios'
import Qs from 'qs'

class Api {
	
	config = {
		baseUrl : Constant.API_URL
	}
	
	
	constructor(){
    	this.config.baseURL =  Constant.API_URL
		
		this.link = axios.create(this.config)
	}
	
//	处理响应
	static handleResponse(resp){
		console.log(resp.error)
		return Promise.resolve(resp.data)
	}
	
	
	
	get (url, data) {
	    return this.link.get(url, {
	      params: data,
	    }).then(resp => {
	    	console.log(resp.data)
	      return Api.handleResponse(resp.data)
	    })
	  }
	
	post (url, data) {
		return this.link.post(url, Qs.stringify(data)
	).then(resp => {
	      return Api.handleResponse(resp)
		})
	}
	
	
	
}
export default Api
