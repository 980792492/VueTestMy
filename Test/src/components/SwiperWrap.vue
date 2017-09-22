<template>
	<div class="swiper_wrap">
		<swiper :options='swiperOption' class='out'>
			<swiper-slide class='a'><img :src="imgList[0]"/></swiper-slide>
			<swiper-slide class='b'><img :src="imgList[1]"/></swiper-slide>
		</swiper>
	</div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
	name:'swiper-wrap',
	data(){
		return {
			imgList:[],
			swiperOption:{
	   			autoplay:5000,
	   			loop:true,
              	direction:'horizontal'
	   		}
	   		
	   		
		}
	},
	mounted(){
		if(this.status == 'home_1') {
			this.imgList= ["http://img.weiye.me/zcimgdir/album/file_59117952bb132.png","http://img.weiye.me/zcimgdir/album/file_5911794c5ebcb.png"]
		}
		if(this.status == 'home_2'){
			this.imgList= ["http://img.weiye.me/zcimgdir/album/file_59102b946b0f1.png","http://img.weiye.me/zcimgdir/album/file_5912aafde2231.png"]
		}
//		console.log(this.status)
	},
	components:{
		swiper,
 		swiperSlide
	},
	computed:{
		 swiper() {
     		return this.$refs.mySwiper.swiper
   		}
	},
	props:{
		status:{
			type:String,
			default: ''
		}
	},
	computed:{
		
	}
	
	
}
</script>

<style lang="less" scoped>
	.swiper_wrap { height: 100%; background: #FFFFFF;
		.out { height: 100%;
			img { height: 100%;}
		}
	}
	
</style>