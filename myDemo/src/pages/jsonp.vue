<template>
	<div class="jsonp">
		122
	</div>
</template>
<script>
	import {getRecommend} from '@/api/a'
    import {ERR_OK} from '@/api/config.js'
	export default {
		name: 'jsonp',
		data() {
			return {

			}
		},
		components: {

		},
		mounted() {
			//单纯的jsonp
			getRecommend().then((res) => {
	          if (res.code === ERR_OK) {
	          	alert(res.data.slider[0].linkUrl)
	            this.recommends = res.data.slider
	          }
        	})
			//vue-resource中的jsonp 
   			this._getJsonpData()
		},
		computed: {

		},
		methods: {
			_getJsonpData() {
				const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2';
                this.$http.jsonp(url, {
                    params: {
                        wd: this.keyword,
                    },
                    jsonp: 'callback'         // 设置回调函数的参数的一个名字，默认是话是callback,
                }).then(function(res) {
                    console.log(res);
                    // this.items = res.body.s;
                })
	        }
		}
	}
</script>
<style>
	
</style>