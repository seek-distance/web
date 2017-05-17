<template>
	<div>
		<p>{{msg}}</p>	
		<button @click='decrement'>-</button>
		<span>{{count}}</span>
		<button @click='increment'>+</button>
	</div>

</template>
<script>
	import {mapState} from 'vuex'
	export default{
		name:'tplChild',
		data(){
			return{
				msg:'tpl子元素1'
			}
		},
		computed: mapState({
			count:'count'
		}),
		methods:{
			increment(){
				this.$store.commit('increment');
			},
			decrement(){
				this.$store.commit('decrement')
			}
		}
	}
</script>
<style scoped>
	p{
		color: #c00;
	}
</style>



