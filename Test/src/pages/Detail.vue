<template>
	<div class="detail_wrap">
		<div class="img_wrap">
			<img src="http://img.weiye.me/zcimgdir/album/file_59099098acc44.png" alt="" />
			<p class="text">日本寿司</p>
		</div>
		<div class="detail_text">
			<p>日本豆腐</p>
		</div>
		<div>
			<action-car :data="item" ></action-car>
		</div>
		
		
	</div>
</template>

<script>
//在对应的模块话文件引入vuex的数据和对应的方法	
import { mapActions , mapGetters } from 'vuex'
import ActionCar from '@/components/ActionCar'
export default{
	name:'detail',
	data(){
		return{
			item:{
				price:29
			}
		}
	},
	created(){
		this.getuserdata({username:'tangjunhao'})
		var that = this
		setTimeout(function(){
			console.log(that.myUserData)
		},3000)
//		console.log(this.myUserData) 
	},
	methods: {
//		将方法放在methods中
		...mapActions(['getuserdata'])
	},
	components:{
		ActionCar
	},
	computed: {
//		全局数据放在computed中
		...mapGetters(['myUserData'])
	}
}
	
</script>

<style lang="less" scoped>
	.img_wrap { width: 100%; height: 6.5rem; position: relative;
		> img { width: 100%; height: 100%;}
		.text { position: absolute; bottom: -2px; background: #FFFFFF; padding: 4px 1.4rem; left: 50%; margin-left: -1.9rem; border-radius: 3px;}
	}
	.detail_text {
		p { text-align: left; line-height: 30px; text-indent: 20px;}
	}
	

</style>