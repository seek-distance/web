<template>
	<div class="tpl">
		tpl木块
		<p>{{message}}</p>
		<router-link to='tplChild1'>tplChild1</router-link>
		<router-link to='tplChild2'>tplChild2</router-link>
		<router-view></router-view>
	</div>

</template>

<script>
	export default{
		name:'tpl',
		data(){
			return{
				message:'儿子东'
			}
		}
	}
</script>

<style scoped>
	div{
		color: #ccc;
	}
	p{
		color: #f00;
	}
</style>