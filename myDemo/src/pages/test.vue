<template>
    <div class="test">
      <ul>
          <li @click="liClick">1</li>
          <li @click="liClick">2</li>
          <li @click="liClick">3</li>
          <li @click="liClick">4</li>
          <li @click="liClick">5</li>
          <li @click="liClick">6</li>
          <li @click="liClick">7</li>
          <li @click="liClick">8</li>
          <li @click="liClick">9</li>
          <li @click="liClick">10</li>
      </ul>
    </div>
</template>
<script>
   export default {
      data(){
        return{

        }
      },
      methods:{
        liClick(){
           console.log(123);
           
        }
      }
   }
</script>
<style>
  .test li{
    height: 100px;
    width: 100%;
    background: red;
    margin-top: 20px;
    line-height: 100px;
    text-align: center;
  }
</style>