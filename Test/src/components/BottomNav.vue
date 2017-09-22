<template>
	<div class="bottom_nav">
		<router-link v-for="(v, index) in items" :to="{name: v.src}" :key="index" ><span class="icon_wrap"><i class="icon iconfont" :class="v.icon"></i></span>{{v.name}}</router-link>
	</div>
</template>

<script>
export default {
	name:'bottom-nav',
	data(){
		return {
			items:[
				{name:'首页', icon:'icon-shouyeshouye', src:'home'},
				{name:'活动', icon:'icon-huodong', src:'activity'},
				{name:'我的', icon:'icon-wode', src:'my'}
			]
		}
	}
}
</script>

<style lang="less" scoped>
	.bottom_nav { height: 100%; display: flex; background: ##FFFFFF; border-top: 1px solid #F3F3F3;
		a { flex: 1; border-right: 1px solid #F3F3F3; height: 0.96rem; padding-top: 0.15rem; color: #CCCCCC;
			> .icon_wrap { display: block; 
				> i { font-size: 23px;}
			}
		}
	
	}

	.bottom_nav a:nth-child(4) { border: none;}
	
	
	/*router-link的组件加载会自动加上Class*/
	.router-link-active {  color: #FFCC30!important; }
</style>