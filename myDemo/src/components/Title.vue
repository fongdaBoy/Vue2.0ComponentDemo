<template>
  <div class="navbar-wrapper headBack height-88">
    <div class="navbar height-88 bot" style="margin-bottom: 0px; " v-bind:style="{'color':titleColor,'backgroundColor':titleBgColor}">
      <div class="left">
        <slot>
          <!--<div @click="leftCall" class="font-34" v-show="leftShow"><i style="font-size:0.9rem;" class="paco icon-back"></i></div>-->
          <div @click="leftCall" class="font-34" v-show="leftShow">
            <span v-if="leftType=='img'" class="leftImg"><img :src="leftName" style="height:1.15rem;margin:-0.2rem 0 0 0.05rem;"/></span>
            <span v-else v-bind:style="{'color':leftColor}">{{leftName}}</span>
          </div>
        </slot>
      </div>
      <div v-if="titleType=='string'" class="font-34" span @click.stop="choose"><span>{{name}}</span>
        <div v-show="canChoose" class="trangle"></div>
      </div>
      <div v-else class="font-34 title-tab">
        <span class='title-tab-tabs' v-for="(index,item) in chooseArr" @click="titleSwitch(index)" v-bind:class="{'qs-tab-tabs-active':index == num}">{{item}}</span>
      </div>
      <div class="right"></div>
      <div class="right" v-show="rightShow" v-bind:style="{'color':rightColor}">
        <a @click="rightCallTwo" style="font-size:1rem;" v-if="rightTwoType != '' && rightTwoType == 'url'"><img :src="rightTwoName" width=50% height=45% style="margin-top:0.5rem;"/></a>
        <a @click="rightCallTwo" style="font-size:1rem;" v-if="rightTwoType != '' && rightTwoType == 'string'">{{rightTwoName}}</a>
        <a @click="rightCall" style="font-size:1rem;" v-if="rightType=='icon'">{{rightName}}</a>
        <a @click="rightCall" class="font-30" style='color:white' v-if="rightType=='string'">{{rightName}}</a>
        <a @click="rightCall" style="font-size:1rem;width:1rem;height:1rem;" v-if="rightType=='url'"><img :src="rightName" width=50% height=45% style="margin-top:0.5rem;"/></a>
      </div>
    </div>
    <ul v-show="isChoose" class="chooseDiv">
      <li v-for="(item,index) in chooseArr" class="font-30 chooseLi" v-bind:class="{'changeColor':index == num}" @click="chooseLi(index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:"paco-title",
    props: {
      name: {   // 可选字段，有默认值
        type:String,
        default: "标题"
      },
      titleColor:{
        type:String,
        default:'#fff'
      },
      titleBgColor:{
        type:String,
        default:'#2CA9FF'
      },
      canChoose:{
        type: Boolean,
        default: false
      },
      isChoose:{
        type: Boolean,
        default: false
      },
      chooseArr:{
        default(){
          return ['标题','题目']
        }
      },
      centerMethod:{
        type:Function,
        default:null
      },
      titleType:{
        type:String,
        default:'string'
      },
      leftShow: {  // 左边是否显示,默认不显示
        type: Boolean,
        default:true
      },
      leftName:{
        default: serverUrl + "/static/images/back2.png"
      },
      leftType:{
        type:String,
        default:'img'
      },
      leftColor:{
        type:String,
        default:'#000'
      },
      rightShow: {  // 右边是否显示,默认不显示
        type: Boolean,
        default:false
      },
      leftMethod: {  //传入左边的方法名,需在调用的地方定义本地方法
        type:Function,
        default:null
      },
      rightMethod: { //传入右边的方法名,需在调用的地方定义本地方法
        type:Function,
        default:null
      },
      rightName: {   // 可选字段，有默认值""
        type:String,
        default: ""
      },
      rightType: {   // 可选字段，有默认值为String时直接输出rightName, 可选Icon时传入 right-name="paco icon-contact"
        type:String,
        default: "string"
      },
      rightColor:{
        type:String,
        default:'blue'
      },
      rightTwoType:{
        type:String,
        default:''
      },
      rightTwoName:{
        type:String,
        default:''
      },
      rightTwoMethod:{
        type:Function,
        default:null
      }
    },
    data(){
      return{
        num:0,
      }
    },
    methods:{
      leftCall(){
        //window.history.go(-1);
        this.leftMethod() //需在调用的地方定义本地方法
      },
      rightCall(){
        this.rightMethod() //需在调用的地方定义本地方法
      },
      rightCallTwo(){
        this.rightTwoMethod()
      },
      choose(){
        if(this.canChoose){
          this.isChoose = !this.isChoose;
        }
      },
      chooseLi(index){
        this.num = index;
        this.name = this.chooseArr[index];
        this.isChoose = false;
        this.centerMethod()
      },
      titleSwitch(index){
        this.num = index;
      }
    }
  }
</script>

<style>
  .chooseDiv{width:7rem;background-color:red;position: relative;z-index:99999999;left:31%;top:1.6rem;background: url(../../static/images/chooseBg.png) center/100% 100%;padding-top: 1.3rem;padding-bottom: 0.8rem;}
  .chooseLi{text-align: center;line-height: 1.5rem;height:1.5rem;}
  .changeColor{color:#2ca9ff}
  .trangle{width:0;height:0;border-left:0.18rem solid transparent;border-right:0.18rem solid transparent;position: absolute;top:0.95rem;right:38%;border-top: 0.25rem solid #333;border-bottom: none;}
  .title-tab{
    display: inline-block;
    height:1.3rem;
    position: relative;
    line-height: 1.2rem;
    text-align: center;
    border-radius: 1rem;
    left: 0;
    background-color: #2ca9ff;
  }

  .title-tab:before {
    content: '';
    pointer-events: none;
    position: absolute;
    border: 1px solid #fff;
    top:0;
    left: 0;
    width: 13.5rem;
    height: 3.1rem;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 2rem;
    z-index: 1;
  }

  .title-tab-tabs{
    display: inline-block;
    width: 3rem;
    margin: 0.2rem;
    height:1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border-radius: 1rem;
    color: #fff;
    z-index: 12;
  }

  .navbar, .navbar:after {
    left: inherit;
  }

  .leftImg img{
    vertical-align: middle;
  }

  .bot:before{
    content: '';
    position: absolute;
    top: 2.2rem;
    left: 0rem;
    border-bottom: 1px solid #249AEB;
    width: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }


</style>


<!--
<template>
  <div class="headBack height-88">
    <div class="height-88" v-bind:class="{'navbar':state!='1','navbar-ebbs':state=='0'}" style="margin-bottom: 0px;">
      <div class="left" style="padding: 0 0.5rem 0 0.5rem;">
        <slot>
          <div @click.stop="leftCall" class="font-34" v-if="leftShow && showText==false"><img :src="backImgUrl" style="height:1.15rem;margin:-0.2rem 0 0 0.05rem;"/></div>
          <div @click.stop="leftCall" class="font-34 color-38adff" v-else>{{leftText}}</div>
        </slot>
      </div>
      <div class="font-34 back-fafafa"><span @click.stop="choose">{{name}}</span>
        <div v-show="canChoose" class="trangle"></div>
      </div>
      <div class="right" style="padding: 0 0.5rem 0 0.5rem;"></div>
      <div class="right" style="padding: 0 0.5rem 0 0.5rem;" v-show="rightShow">
        <a @click.stop="rightCall" style="color:#333!important;font-size:1rem;" v-if="rightType=='icon'"><i class="{{rightName}}"></i></a>
        <a @click.stop="rightCall" class="font-30" style="color:#0ae;" v-if="rightType=='string'">{{rightName}}</a>
        <a @click.stop="rightCall" style="color:#0ae;display:inline-block;font-size:1rem;width:1rem;height:1rem;" v-if="rightType=='url'"><img :src="rightName" width=100% height=100% style="margin-top:-0.2rem;"/></a>
      </div>
    </div>
    <ul v-show="isChoose" class="chooseDiv">
      <li v-for="(index,item) in chooseArr" class="font-30 chooseLi" v-bind:class="{'changeColor':index == num}" @click="chooseLi(index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:"paco-title",
    data(){
      return{

      }
    },
    props: {
      name: {   // 可选字段，有默认值
        default: "标题",
      },
      backImgUrl: {   // 可选字段，有默认值""
        default: serverUrl + "/static/images/back2.png"    //backIcon: serverUrl + "/static/images/back2.png",
      },
      leftShow: {  // 左边是否显示,默认显示
        type: Boolean,
        default:true
      },
      showText:{
        type: Boolean,
        default:false
      },
      leftText:{
        default: "取消",
      },
      rightShow: {  // 右边是否显示,默认不显示
        type: Boolean,
        default:false
      },
      state:{
        default:'0'
      },
      leftMethod: {  //传入左边的方法名,需在调用的地方定义本地方法
        null
      },
      rightMethod: { //传入右边的方法名,需在调用的地方定义本地方法
        null
      },
      rightName: {   // 可选字段，有默认值""
        default: ""
      },
      rightType: {   // 可选字段，有默认值为String时直接输出rightName, 可选Icon时传入 right-name="paco icon-contact"
        default: "string"
      },
      isChoose:{
        default: false
      },
      canChoose:{
        default: false
      },
      chooseArr:{
        default:[]
      },
      centerMethod:{
        null
      },
      num:{
        default:0
      }
    },
    methods:{
      leftCall(){
        this.leftMethod() //需在调用的地方定义本地方法
      },
      rightCall(){
        this.rightMethod() //需在调用的地方定义本地方法
      },
      choose(){
        if(this.canChoose){
          this.isChoose = !this.isChoose;
        }
      },
      chooseLi(index){
        this.num = index;
        this.name = this.chooseArr[index];
        this.isChoose = false;
        this.centerMethod()
      }
    }
  }
</script>


<style>
  .navbar-wrapper > .navbar-ebbs{
    position: relative;
    height: 3.14286em;
    line-height: 3.14286em;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    text-align: center;
    margin-bottom: -1px;
    z-index: 999;
  }

  .navbar-wrapper > .navbar-ebbs>.left1, .navbar-ebbs>.right1 {
    font-size: 1em;
    color: #333;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    /*padding-left: 1.07143em;*/
    /*padding-right: 1.07143em;*/
    padding-left:0.75rem;
    padding-right:0.75rem;
  }
  .chooseDiv{width:7rem;background-color:red;position: relative;z-index:99999999;left:31%;top:1.6rem;background: url(../../static/images/chooseBg.png) center/100% 100%;padding-top: 1.3rem;padding-bottom: 0.8rem;}
  .chooseLi{text-align: center;line-height: 1.5rem;height:1.5rem;}
  .changeColor{color:#38adff}
  .trangle{width:0;height:0;border-left:0.18rem solid transparent;border-right:0.18rem solid transparent;position: absolute;top:0.95rem;right:38%;border-top: 0.25rem solid #333;border-bottom: none;}
</style>-->
