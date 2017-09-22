<template>
	<div>
		<p>这是一个测试vuex的组件</p>
		<div>{{message}}</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
	
export default {
	name: 'ceshi',
	data(){
		return {
			
		}
	},
	computed:{
		...mapGetters(['message'])
	}
}
</script>

<style>
</style>