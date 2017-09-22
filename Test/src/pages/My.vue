<template>
	<div >
		my
		<div> <button @click="add">增加</button></div>
		<div>{{message}}</div>
		<ceshi></ceshi>
		<div>
			<p>计算器</p>
			<div>
				<div @click="check(item)" class="item" v-for="(item, index) in numList">{{item}}</div>
			</div>
			<div class="action_icon">
				<div @click="action(item)" v-for="(item, index) in actionList" :key="index">{{item}}</div>
				总数{{all}}
			</div>
		</div>
		
		
	</div>
</template>

<script>
import { mapActions , mapGetters } from 'vuex'

import ceshi from '@/components/ceshi'
import Api from '@/utils/Api'
export default {
	name:'my',
	data(){
		return {
			numList: [1,2,3,4,5,6,7,8,9,0],
			actionList:['+', '-', '*', '/', '='],
			actionflag:null,  //action的标记
			all: 0
			
		}
	},
	created(){
		
		
		
		this.api = new Api()
		let params = {}
		params.token = '2222'
//		this.api.post('test1.json', params).then(resp => {
//			console.log(resp)
//		})
		
	},
	methods:{
		check(item){
			if(this.actionflag){
				this.all = this.all+this.actionflag+item
				this.actionflag= null
			}else {
				this.all = item
			}
			
//			this.all = item
		},
		action(item){
			switch (item){
				case '+':
					this.actionflag = '+'
				break;
				case '-':
					this.actionflag = '-'
					
				break;
				case '*':
					this.actionflag = '*'
				
				break;
				case '/':
					this.actionflag = '/'
				
				break;
				case '=':
					
					this.actionflag = null
					break;
				default:
					break;
			}

		},
		
		add () {
			this.ceshiAction(1)
		},
		...mapActions(['ceshiAction'])
	},
	computed:{
		...mapGetters(['message'])
	},
	components:{
		ceshi
	}
}
</script>

<style>
	div { overflow: hidden;}
	.item { border: 1px solid; width: 30px; height: 30px; float: left; line-height: 30px;}
	
	.action_icon div { border: 1px solid; width: 20px; height: 20px; margin: 0 auto;}
</style>