<template>
    <Tabs type="normal" act='2'>
      <Tab title="tabname1" >
          111
          <ul>
          <li v-for='item in items'>
            {{item}}
          </li>
          </ul>
      </Tab>
      <Tab title="tabname2" >
          222
      </Tab>
      <Tab title="tabname3" >
          333
           <ul>
          <li v-for='(index,item) in items'>
            {{item}} <span> span:{{index}}</span>
          </li>
          </ul>
      </Tab>
     
    </Tabs>
</template>

<script>
import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'
export default {
  components:{
     'Tabs':Tabs,
     "Tab":Tab
  },
  data(){
    return{
      items:{
        a:'1',
        b:'2',
        c:'3'
      }
    }
  },
  methods:{

  },
  events:{
    'tba-msg'(msg){
      console.log(msg)
    }
  }
}
</script>
