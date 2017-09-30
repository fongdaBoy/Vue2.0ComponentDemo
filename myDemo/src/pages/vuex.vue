<template>
	<div class="vuex">
		<a-view></a-view>
		<b-view></b-view>
		<b>我是父组件</b>{{msg}}
	</div>
</template>

<script>
	import AView from '@/components/vuex/a';
	import BView from '@/components/vuex/b';
	import {mapGetters} from 'vuex'
	
	export default {
		name: 'vuex',
		components: {
			AView,
			BView
		},
		data() {
			return{
			}
		},
		mounted() {

		},
		computed: {
			msg() {
				return this.a
			},
			...mapGetters([
				'a'
			])
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	
</style>