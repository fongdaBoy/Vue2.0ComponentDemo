<template>
	<div class="qart">
		<div id="qrcode" ref="qrcode">  
		</div>  
		<input type="text" id="getval" value="" placeholder="修改这个值改变二维码"> 
	</div>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				i:false
			}
		},
		created() {
			
		},
		mounted() {
			this._getQart()
		},

		methods: {

			_getQart: function() {
				
				if(this.i==false){
					var qrcode = new QRCode(document.getElementById("qrcode"), {  
				        width : 200,//设置宽高  
				        height : 200  
				    });  
				        document.getElementById("getval").onkeyup =function(){  
				        qrcode.makeCode(document.getElementById("getval").value);  
				    };  

				    qrcode.makeCode(document.getElementById("getval").value); 

				}
				this.i = true;
			},

		}

	}

</script>

<style>
	#qrcode{
		height: 200px;
		width: 200px;
		margin: auto;
	}
</style>