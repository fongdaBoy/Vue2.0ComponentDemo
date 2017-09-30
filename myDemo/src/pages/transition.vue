<template>
	<div class="transtion">
	<button @click='show = !show '>show</button>
	<transition name='bounce'>
			<span-components v-show="show">Look at me!</span-components>
	</transition>
		
	</div>
</template>
<script>
import SpanComponents from '@/components/transition.vue'
	export default {
		components: {
			SpanComponents
		},
		data() {
			return{
				show: false,
			}
		},
		mounted() {
		},
		methods: {

		}
	}
</script>
<style>
.bounce-enter-active, .bounce-leave-active{
	transition: all 1s ease;
}
.bounce-enter-active{
	 	opacity:1;
        width:300px;
        height:300px;
}
.bounce-leave-active{
		opacity:0;
        width:100px;
        height:100px;
}
.bounce-enter{
        opacity:0;
        width:100px;
        height:100px;
}
.bounce-leave{
		opacity:1;
        width:300px;
        height:300px;
}


/*.bounce-transition {
  display: inline-block; 
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}*/
</style>