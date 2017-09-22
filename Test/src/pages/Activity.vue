<template>
	<div>
		list11
		<el-button @click="alert">默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		
		
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible">
		  <span>这是一段信息</span>
		</el-dialog>

	</div>
</template>

<script>
export default {
	name: 'list',
	data() {
		return {
			dialogVisible: false
		}
	},
	methods:{
		alert() {
			this.dialogVisible = true
		}
	}
}
</script>

<style>
</style>