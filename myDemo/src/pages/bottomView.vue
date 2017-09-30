<template>
	<div class="bottomView">
	<transition>
		<bottom></bottom>
	</transition>
	</div>
</template>
<script>
	import Bottom from '@/components/bottom'
	export default {
		name: 'bottomView',
		components: {
			Bottom
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	
</style>
