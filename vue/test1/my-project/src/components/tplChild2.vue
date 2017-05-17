<template>
	<div>
		<p>tpl子元素2</p>
		<button @click='decrement'>-</button>
		<span>{{count}}</span>
		<button @click='increment'>+</button>
	</div>
</template>
<script>
	export default{
		computed:{
			count(){
				return this.$store.state.count;
			}
		},
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