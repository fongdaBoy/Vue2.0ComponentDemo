<template>
	<div class="keepAlive1">
		 <ul>
          <!-- <li @click="liClick">1</li>
          <li @click="liClick">2</li>
          <li @click="liClick">3</li>
          <li @click="liClick">4</li>
          <li @click="liClick">5</li>
          <li @click="liClick">6</li>
          <li @click="liClick">7</li>
          <li @click="liClick">8</li>
          <li @click="liClick">9</li>
          <li @click="liClick">10</li> -->
          <li v-for="(list,index) in lists">{{list.title}}</li>
      </ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
        lists:[]
			}
		},
    mounted() {
      let vm = this;
      var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2';
          this.$http.post(url, {
              username: 'liwei',
              pwd: '123456'
          }, {
              // 需要配置一下
              emulateJSON: true
          }).then(function(res) {
              console.log(res.data.result);
              vm.lists = res.data.result;
          })
    },
		methods: {
			liClick(){
				this.$router.push({path:'/keepAlive2'})
			}
		},
    beforeRouteLeave(to, from, next){
      // let position = window.scrollY()
      // this.$store.commit('SAVE_POSITION', position) //离开路由时把位置存起来
      console.log(123);
      
    }
	}
</script>
<style>
	.keepAlive ul{
    position: relative;
    height: 500px;
    overflow: auto;
  }
  .keepAlive li{
    height: 100px;
    width: 100%;
    background: red;
    margin-top: 20px;
    line-height: 100px;
    text-align: center;
  }
</style>