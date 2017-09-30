<template>
    <div class="keepAlive">
      <div class="keepAliveTitle"><span @click='back'>返回</span></div>
        <router-link tag="div" class="tab-item" to="/keepAlive1">
          <span class="tab-link">keepAlive1</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/keepAlive2">
          <span class="tab-link">keepAlive2</span>
        </router-link>
       <keep-alive>
           <router-view></router-view> 
       </keep-alive>
    </div>
</template>
<script>
   export default {
      data(){
        return{

        }
      },
      methods:{
        back(){
          history.go(-1);
        },
        liClick(){
           this.$router.push({path: '/keepAlive1'})
           
        }
      }
   }
</script>
<style>
  
</style>