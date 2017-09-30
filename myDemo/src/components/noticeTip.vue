<template>
	<div class="fd-noticeTip">
			<transition name='noticeTip-fade'>
				<p class="center-p" v-show="type=='center'" v-bind:style='tipStyle'>{{message}}</p>
			</transition>

			<transition name='noticeTip-fade'>
				<div class="top-noticeTip" v-show="type=='top'" v-bind:style='tipStyle' ref='noticeTipTop'><p class="top-p" >{{message}}</p><span @click='SpanClick'>&times;</span></div>
			</transition>

			<transition name='noticeTip-fade'>
				<p class="bottom-p" v-show="type=='bottom'" v-bind:style='tipStyle'>{{message}}</p>
			</transition>
	</div>
</template>
<script>
	export default {
		name: 'noticeTip',
		props:{
			message:{type:String},
			type:{type:String},
			color:{type:String},
			backgroundColor:{type:String},
			tipStyle:{type:Object}
		},
		methods: {
			SpanClick() {
				this.$refs.noticeTipTop.style.display='none'
			}
		}
	}
</script>
<style>
.fd-noticeTip{
  display: flex;
  justify-content:center;
}
</style>