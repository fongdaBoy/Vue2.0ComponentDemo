<template>
  <div class="btnshow">
    <button @click = "openToast">1111</button>
    <button @click = "openToastfail">2222</button>
    <button @click = "openToastopps">3333</button>
  </div>
</template>

<script>
import AlertNoticeTip from '@/components/noticeTip.js';
export default {
  data(){
    return{
    }
  },
  methods:{
    openToast(){
      AlertNoticeTip('2132')
    },
    openToastfail(){
        AlertNoticeTip({
          message:"网络无法连接",
          duration:1000,
          type:"center",
          color:'red',
          backgroundColor:'orange'
      });
    },
    openToastopps(){
      AlertNoticeTip({
        message:"网络无法连接",
        type:'bottom'
      });
    }
  }

}
</script>
<style>
  .btnshow .btn{
      margin-bottom: 10px;
  }
</style>
