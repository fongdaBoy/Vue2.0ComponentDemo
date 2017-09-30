<template>
	<div class="toast" >
		<!--<div class="paco icon" v-bind:class="{'icon-right-o':type=='success',success:type=='success','icon-wrong-o':type=='fail',fail:type=='fail','icon-opps':type=='opps', opps:type=='opps'}"></div>-->
    <div class="paco icon" >
      <img v-if="type=='success'" src="/static/images/success.png">
      <img v-if="type=='fail'" src="/static/images/failure.png">
      <img v-if="type=='opps'" src="/static/images/connectionless.png">
    </div>

    <p class="message">{{message}}</p>
	</div>
</template>
<script>
	export default{
		name:'Toast',
		props:{
			message:{type:String},
			type:{type:String}
		}
	}
</script>
<style>

</style>
