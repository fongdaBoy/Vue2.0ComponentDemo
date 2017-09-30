<template>
	<div class="aview">
		<input type="" name="" @input='changeInput'>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex'
	export default{
		name:'aview',
		data() {
			return{

			}
		},
		computed: {

		},
		mounted() {

		},
		methods: {
			changeInput(e) {
				this.setDate(e.target.value)
			},
			...mapMutations({
        		setDate: 'SET_A'
      		})
		}
		
	}
</script>
<style>
	
</style>