<template>
	<div class="titleView">
		<paco-title :left-show="true" :left-method="back" name="续保客户详情"  :right-show="true" :right-method="confirm"></paco-title>
	</div>
</template>
<script>
	import PacoTitle from '@/components/Title.vue'
	export default {
		name: 'titleView',
		componets:{
			PacoTitle
		},
		data() {
			return {
				back() {
					console.log('back')
				},
				confirm() {
					console.log('confirm')
				}
			}
		},
		methods: {

		}
	}
</script>