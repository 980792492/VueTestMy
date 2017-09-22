<template>
	<div class="homenav_wrap">
		<router-link v-for="(item,index) in items" :to="{name:item.src}" :key="index" ><img :src="item.img" alt="" /><p>{{item.name}}</p></router-link>
	</div>
</template>

<script>
export default {
	name:'home-nav',
	data(){
		return {
			items:[
				{name:'主食', img:'http://img.weiye.me/zcimgdir/album/file_591031e24a7b1.png', src:''},
				{name:'快餐', img:'http://img.weiye.me/zcimgdir/album/file_59103615d2052.png', src:''},
				{name:'早餐', img:'http://img.weiye.me/zcimgdir/album/file_59112b612dad7.png', src:''},
				{name:'下午茶', img:'http://img.weiye.me/zcimgdir/album/file_5911316bc03ea.png', src:''}
			]
		}
	}
	
}
</script>

<style lang="less" scoped>
	.homenav_wrap { height: 1.56rem; display: flex; 
		a { flex: 1;  text-align: center; padding-top: 0.26rem; color: #444;
			> img { width: 0.92rem;}
		}
		
	}

</style>