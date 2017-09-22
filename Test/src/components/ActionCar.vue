<template>
	<div class="car_wrap">
		<div class="action"><span>￥ 29.0</span><p><span class="min" @click=" num = num - 1">-</span><input type="text"  v-model="num"  value="0" disabled="disabled" /><span class="max" @click="num = num +1 ">+</span></p></div>
		<div class="ok">
			<p class="num_wrap"><span class="all_car"><em>{{num}}</em><i class="icon iconfont icon-jiarugouwuche"></i></span><span class="all_price">￥{{ price * num}}</span></p>
			<p class="btn_wrap"><button>选好了</button></p>
		</div>
	</div>
</template>

<script>
	
	
export default{
	name:'action-car',
	data(){
		return {
			num:0
		}
	},
	created(){
		this.price = this.data.price
	},
	methods:{
		min(){
//			alert('点击了减')
//			this.num
		},
		max(){
//			alert('点击了加')
		}
	},
	props:{
		data:{
			Type:Object,
			default(){
				return {
					
				}
			}
		}
	},
	watch:{
		num( val){
			if(val < 0 ) {
				this.num = 0
			}
		}
	}
	
}
</script>

<style lang="less" scoped>
	.car_wrap { height: 2rem; 
		> .action {position: relative;  height: 2rem;
			> span { display: inline-block; vertical-align: middle; padding-top: 0.8rem;}
			> p { position: absolute;  top:0.1rem; right: 1rem; display: inline-block; padding-top: 0.6rem;
				> span { display: inline-block; width: 0.4rem; height: 0.4rem; font-size: 16px; line-height: 0.4rem; background: #ffcc01; border-radius: 50%; color: #fff;}
				> input { width: 0.5rem; height: 0.5rem; border: none; text-align: center; background: #fff;}
				> .min { border: 1px solid black; background: #FFFFFF; color: black; line-height: 0.35rem;}
			}
		}
		
		.ok {width: 100%; display: flex; height: 0.96rem; position: fixed; bottom: 0; background: #696969;
			.num_wrap { flex: 1; line-height: 0.96rem; display: flex; color: #FFFFFF; font-size: 13px;
				.all_car { width: 1.5rem; padding-left: 0.7rem; position: relative;
					> i { font-size: 20px;}
					> em {position: absolute; top:0.14rem ; left: 1.14rem;  color: #FFFFFF; padding: 2px; background: red; border-radius: 50%; width: 0.34rem; height: 0.34rem; line-height: 0.32rem;}
				}
				.all_price { flex: 1; text-align: left; padding-left: 0.4rem; }
			}
			.btn_wrap { width: 1.92rem; background: #ffcc01;
				> button { width: 100%; height: 100%; border: none; background: #ffcc01; color: #FFF; font-weight: 600; outline: none;}
			}
		}
	}
	
</style>