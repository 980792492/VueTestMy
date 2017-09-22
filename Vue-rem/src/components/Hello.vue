<template>
	<div class="home">

		
		 <transition name="fade">
			<div v-show="show" class="left menu">
				<p><router-link :to="{name: 'box1'}">菜单1</router-link></p>
				<p><router-link :to="{name: 'box2'}">菜单2</router-link></p>

			</div>
		</transition>
		<div class="rongqi box">
			<!--<p class="kaiguan" @click="show = !show">开关</p>-->
			<transition name="bounce">
				<router-view class="my"></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			show: true
		}
	},
	methods: {
			
	}
	
}
</script>

<style scoped>
 .home {width: 100%; height: 100%; display: flex;}
 .menu { width: 200px; height: 100%; background: forestgreen; border: 4px solid; overflow: hidden;}
 .box {  flex: 1; position: relative;  width:550px; height: 100%; border: 6px solid red;}
 	a { display: block; width: 100%; height: 200px; line-height: 200px;}
 	.kaiguan { width: 100px; height: 100px;line-height: 100px; background: red; position: absolute;}
 	.my { position: absolute; top: 0;}
 	
.bounce-enter { opacity: 0; }  /*定义进入过渡的开始状态*/
.bounce-enter-active { animation: bounceInLeft 1s;}  /*定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。*/
.bounce-enter-to {}   /*定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除。*/
/*.bounce-leave { opacity: 0;}    /*定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。*/*/
.bounce-leave-active {animation: bounceOutRight 1s; transition: opacity 1s;  }  /*定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。*/
.bounce-leave-to {}  /*2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除。*/
 	
 	
</style>