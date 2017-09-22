<template>
	<div class="appinner">
		
	    <router-view></router-view>
	    <div class="bottom_nav_wrap">
	    	<bottom-nav></bottom-nav>
	    </div>
	</div>
</template>

<script>
import BottomNav from '@/components/BottomNav'

export default {
	name:'app-inner',
	data(){
		return {
			
		}
	},
	components:{
		BottomNav
	}
}
</script>

<style>
	
.appinner { padding-bottom:0.96rem ;}	
.bottom_nav_wrap { position: fixed; bottom: 0; height: 0.96rem; width: 100%; background: #FFFBFF;}
	
	
</style>