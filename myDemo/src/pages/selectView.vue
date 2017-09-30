<template>
	<div class="selectView">
		<my-select 
		:options="options"
		></my-select>
		<my-select>
			
		</my-select>
	</div>
</template>
<script>
	import MySelect from '@/components/select'
	export default{
		name:"selectView",
		components:{
			MySelect
		},
		data() {
			return{
				options: [
			        {
			          value: '1',
			          label: '篮球'
			        },
			        {
			          value: '2',
			          label: '羽毛球'
			        },
			        {
			          value: '3',
			          label: '乒乓球'
			        },
			        {
			          value: '4',
			          label: '高尔夫',
			          disabled: true
			        },
			        {
			          value: '5',
			          label: '篮球'
			        },
			        {
			          value: '6',
			          label: '羽毛球'
			        },
			        {
			          value: '7',
			          label: '乒乓球'
			        },
			        {
			          value: '8',
			          label: '篮球'
			        },
			        {
			          value: '9',
			          label: '羽毛球'
			        },
			        {
			          value: '10',
			          label: '乒乓球'
			        },
			        {
			          value: '11',
			          label: '高尔夫'
			        }
		      	]
		    
			}
		}
	}
</script>