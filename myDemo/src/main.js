// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import AMap from 'vue-amap'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResource)
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   key: 'your amap key',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// });
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
