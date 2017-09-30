<template>
	<div class="my_select">
		<div class="fd_select">
			<button>
				122
			</button>
			<select>
				<option v-for="item in options" value="item.value">{{item.label}}</option>
			</select>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			options:{
				type:Array,
				default: function() {
					return [
						{
				          value: '1',
				          label: '篮球'
				        },
				        {
				          value: '2',
				          label: '羽毛球'
				        }
					]
				}
			}
		}
	}
</script>

