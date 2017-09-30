<template>
<div>
    <div class="tabs">
      <div v-for="(tabs,index) in tablist" class="tab"  v-bind:class='{active:tabindex==index}'  v-on:click="tab(index)">{{tabs.title}}</div>
    </div>
    <div class="tabs-content ">
        <slot></slot>
    </div>
</div>

</template>

<script>
	export default{
		name:'Tabs',
		props: {
			type:{},
            act:{type:[Number,String],required: 0}
		},
		data(){
			return{
				tabindex:null,
		        num:null,
		        tabnum:true,
				tablist:[]
			}
		},
        cread(){

        },
		mounted(){
			this.tabindex=this.act
            this.num = 0
            let children = this.$children
        	children.map((key,c)=>{
        		console.log(key)
        		console.log(c)
                this.num = this.num+1
            	this.tablist.push({
                    "title": key.title,
                    "active": key.active
                });
        	})
            this.$children[this.act].active=true;
            if (this.num==2) {
                this.tabnum=true
            }else{
                this.tabnum=false
            }
		},
  		methods: {
    		tab(num) {
    			// this.tabindex=num

    			// this.$children.forEach(c=>{
    			// 	c.active=false
    			// })
    			// this.$children[num].active=true;

       //          this.$emit('tba-msg', this.tabindex);
    		}
  		}

	}
</script>
