<template>
	<div class="aview">
	<!-- <input type="" name="" :value="msg"> -->
		<b>我是兄弟bView</b>{{msg}}
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{
		name:'bview',
		data() {
			return{
			}
		},
		computed: {
			msg() {
				return this.a
			},
			...mapGetters([
				'a'
			])


		},
		mounted() {
			// console.log(this.a)
		},
		methods: {

		}
	}
</script>
<style>
	
</style>