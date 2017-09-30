<template>
  <div class="photo">
      <photo-view></photo-view>
    	<photo-view></photo-view>
  </div>
</template>

<script>
	import PhotoView from "@/components/photoview/photoview";
  export default {
    
    name: 'photo',
    data () {
      return {
       
      }
    },
    components: {
    	PhotoView
    }
  }
</script>

<style scoped>

</style>
