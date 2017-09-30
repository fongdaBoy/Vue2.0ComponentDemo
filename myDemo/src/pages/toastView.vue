<template>
  <div class="btnshow">
    <input type="button" value="success" class="inputBtn" @click = "openToast">
    <input type="button" value="fail" class="inputBtn" @click = "openToastfail">
    <input type="button" value="opps" class="inputBtn"  @click = "openToastopps" >
  </div>
</template>

<script>
import toast from '@/components/Toast.js';
export default {
  data(){
    return{

    }
  },
  methods:{
    openToast(){
      // toast("成功提醒");
      toast('成功提醒')
    },
    openToastfail(){
      toast({
        message:"失败提醒",
        duration:100,
        type:"fail"
      });
    },
    openToastopps(){
      toast({
        message:"网络无法连接",
        duration:5000,
        type:"opps"
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
