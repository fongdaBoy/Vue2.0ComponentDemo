<template>
  <div class="hello">
      <div class="demoTitle"><router-link to="/test">test</router-link></div>
    	<div class="demoTitle"><router-link to="/photo">1 photo</router-link></div>
    	<div class="demoTitle"><router-link to="/qrcode">2 qrcode</router-link></div>
    	<div class="demoTitle"><router-link to="/vuex">3 vuex</router-link></div>
      <div class="demoTitle"><router-link to="/jsonp">4 jsonp</router-link></div>
      <div class="demoTitle"><router-link to="/amap">5 amap</router-link></div>
      <div class="demoTitle"><router-link to="/bottomView">6 bottomView</router-link></div>
      <div class="demoTitle"><router-link to="/transition">7 transition</router-link></div>
      <div class="demoTitle"><router-link to="/toastView">8 toastView</router-link></div>
      <div class="demoTitle"><router-link to="/noticeTipView">9 noticeTipView</router-link></div>
      <div class="demoTitle"><router-link to="/TabView">9 TabView</router-link></div>
      <div class="demoTitle"><router-link to="/titleView">9 titleView</router-link></div>
      <div class="demoTitle"><router-link to="/selectView">10 select</router-link></div>
      <div class="demoTitle"><router-link to="/keepAlive1">11 keepAlive</router-link></div>
      
      
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped lang='less'>
  .demoTitle{
     background: #8632d0;
     border-bottom: 1px solid #ccc; 
     width: 60%;
     margin: auto;
     border-radius: 5px;
    a{
        height: 50px;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
    
  }
</style>
