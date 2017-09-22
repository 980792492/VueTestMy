<template>
	<div class="home">
		<div class="swiper_wrap">
			<swiper-wrap status='home_1'></swiper-wrap>
		</div>
		<div class="home_nav">
			<home-nav></home-nav>
		</div>
		<div class="home_discount"> 
			<swiper-wrap status='home_2'></swiper-wrap>
		</div>
		<div class="ads_wrap">
			<div class="ads_left">
				<a href="">
					<p>{{message}}</p>
					<p>更多惊喜等你拿</p>
					<img src="http://img.weiye.me/zcimgdir/album/file_59104409abcda.png" alt="" />
				</a>
			</div>
			<div class="ads_right">
				<a class="right_top">
					<div class="top_left">
						<p>走进美食</p>
						<p>更懂美食</p>
					</div>
					<div class="top_right">
						<img src="http://img.weiye.me/zcimgdir/album/file_5910440c43e5b.png" alt="" />
					</div>
				</a>
				<a class="right_bottom">
					<div class="bottom_left">
						<p>你任性吃</p>
						<p>好吃停不下来</p>
					</div>
					<div class="bottom_right">
						<img src="http://img.weiye.me/zcimgdir/album/file_591044112077c.png" alt="" />
					</div>
				</a>
			</div>
		</div>
		<div class="qidai">
			<a href="">
				<!--<img src="" alt="" />-->
			</a>
		</div>
		
		<div class="lilist">
			<p>最美味最优惠</p>
			<router-link v-for="(item, index) in items" :to="{name:'detail', params: { id: item.id }}" :key="index" >
				<div class="item_left">
					<img :src="item.img" alt="" />
				</div>
				<div class="item_right">
					<p>唐洋鸡块</p>
					<p><span>￥{{item.price}}</span><span class="number">销量<i>{{item.num}}</i></span><span class="adcar"><i @click="addcar" class="icon iconfont icon-jiarugouwuche"></i></span></p>
				</div>
			</router-link>
		</div>
		
		
		
		
		
		
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'	
import axios from 'axios'
import SwiperWrap from '@/components/SwiperWrap'
import HomeNav from '@/components/HomeNav'
import Api from '@/utils/Api'
export default {
	name:'home-index',
	data(){
		return {
			items: [
				{id:'1',name:'唐扬鸡块', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_590c4d2d835c3.png'},
				{id:'1',name:'日本寿司', price:'26', num:'0',img:'http://img.weiye.me/zcimgdir/album/file_59099098acc44.png'},
				{id:'1',name:'鸡蛋甜点', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_59098f0ea3438.png'},
				{id:'1',name:'唐扬鸡块', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_59098ef2b7071.png'},
				{id:'1',name:'唐扬鸡块', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_59098ee307aef.png'},
				{id:'1',name:'唐扬鸡块', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_590c4d2d835c3.png'},
				{id:'1',name:'唐扬鸡块', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_590c4d06a401f.png'},
				{id:'1',name:'唐扬鸡块', price:'52', num:'1',img:'http://img.weiye.me/zcimgdir/album/file_590c4d921cdef.png'}
			]
		}
	},
	created(){
//		axios.get('/static/json/test.json').then(resp => {
//			console.log(resp.data)
//		}).catch((e) => {
//			console.log(e)
//		})
		this.api = new Api()
		this.api.get('test.json').then(resp => {
			console.log(resp)
		})


	},
	methods:{
		addcar(){
			alert('点击了添加购物车按钮')
		}
	},
	computed:{
		...mapGetters(['message'])
	},
	components:{
		SwiperWrap,
		HomeNav
	}
	
	
}
</script>

<style lang="less" scoped>
	.swiper_wrap { height: 170px;}
	
	.ads_wrap { height: 3.2rem; display: flex; background: #F3F3F3;
		.ads_left { width: 2.8rem; background: #FFFFFF;
			> a { display: block;
				> p { margin-top: 10px;}
				> p:nth-child(1) { font-size: 15px; font-weight: 600; color: rgb(155, 222, 86);}
				> p:nth-child(2) { font-size: 13px; color: rgb(102, 102, 102);}
				> img { width: 1.6rem; height: 1.6rem; margin: 0 auto; margin-top: 15px;}
			}
		}
		.ads_right { flex: 1; padding-left: 2px; 
			.right_top { height: 1.58rem; background: #FFFFFF; display: flex;
				.top_left { flex: 1; padding-top: 15px;
					> p { line-height: 20px;}
					> p:nth-child(1) {color: rgb(250, 112, 112); font-size: 15px;font-weight: 600;}
					> p:nth-child(2) { color: rgb(102,102,102); font-size: 13px;}
				}
				.top_right { width: 1.8rem; padding-right: 0.4rem; padding-top: 0.2rem;
					 img { width: 1.2rem; height: 1.2rem;}
				}
			}
			.right_bottom { height: 1.58rem; background: #FFFFFF; display: flex;  margin-top: 2px;
				.bottom_left { flex: 1; padding-top: 15px;
					> p { line-height: 20px;}
					> p:nth-child(1) {color: rgb(250, 112, 112); font-size: 15px;font-weight: 600;}
					> p:nth-child(2) { color: rgb(102,102,102); font-size: 13px;}
				
				}
				.bottom_right { width: 1.8rem; padding-right: 0.4rem; padding-top: 0.2rem;
					 img { width: 1.2rem; height: 1.2rem;}
				}
			}
		}	
	}
	
	
	.qidai { height: 1.65rem; padding: 7px 0; background: #F3F3F3;
		a { display: block; height: 100%; background: url('http://img.weiye.me/zcimgdir/album/file_5912b685a92d2.png');
		}
	}
	
	.lilist { background: #F3F3F3; 
		> p { text-align: left; padding-left: 10px; background: #FFFFFF; line-height: 0.4rem; margin-bottom: 1px;}
		a { display: flex;  height: 2.2rem; margin-bottom: 3px; background: #FFFFFF; padding-top: 10px; padding-left: 10px;
			.item_left {width: 2rem; 
				> img { width: 1.8rem; height: 1.8rem;}
			}
			.item_right {flex: 1;  padding-left: 10px;
				p:nth-child(1) { text-align: left; font-size: 14px;}
				p:nth-child(2) { text-align: left; margin-top: 1rem; height: 0.5rem; font-size: 14px; padding-right: 15px;
					>span:nth-child(1) { color: #f60;}
					> .number { margin-left: 5px; color: #a8a8a8; }
					> .adcar { float: right; width:25px; height: 25px; 
						> i { font-size:20px; color: #a8a8a8;}
					}
				 }
			}
		}
		
		
		
		
	}
	
	
	
	
	
	
	
	.home_discount { height: 1.4rem; background: #F3F3F3;padding: 5px 0;}
</style>