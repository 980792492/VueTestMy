<template>
  <div id="app">
  		<div class="top">
	  		<span class="back" @click="back()"><i class="icon iconfont icon-back"></i>返回</span>
	  		<span class="menu" @click="menu"><i class="icon iconfont icon-menu"></i></span>
	  	</div>
	    <router-view></router-view>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav'
export default {
  name: 'app',
  data(){
  	return {
  		
  	}
  },
  methods:{
//	回退按钮的操作
  	back(){
  		this.$router.back()
  	},
  	menu(){
  		alert('你TM再点我一下试试')
  	}
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
 padding-top: 0.8rem;
}
 a { text-decoration: none;}
 
 

.top {width: 100%; height: 0.8rem; background: black; position: fixed; top: 0; z-index: 999;}
.top .back {display: block; float: left; width:1.5rem; height: 100%; line-height: 0.8rem; color: #FFFFFF; font-size: 0.3rem;}
.top .menu { display: block; float: right; width: 0.5rem; height: 100%; line-height: 0.8rem; margin-right: 10px;}
.top .back i { color: #FFFFFF; font-size: 0.38rem; font-weight: 600;}
.top .menu i { color: #FFFFFF; font-size: 0.5rem; font-weight: 600;}




</style>
