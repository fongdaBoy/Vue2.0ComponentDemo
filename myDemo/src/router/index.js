import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import test from '@/pages/test'
import photo from '@/pages/photo'
import qrcode from '@/pages/qrcode/qrcode'
import vuex from '@/pages/vuex'
import jsonp from '@/pages/jsonp'
import amap from '@/pages/amap'
import bottomView from '@/pages/bottomView'
import transition from '@/pages/transition'
import toastView from '@/pages/toastView'
import noticeTipView from '@/pages/noticeTipView'
import TabView from '@/pages/TabView'
import titleView from '@/pages/titleView'
import selectView from '@/pages/selectView'
import Mint from 'mint-ui'
import keepAlive from '@/pages/keepAlive'
import keepAlive1 from '@/pages/keepAlive1'
import keepAlive2 from '@/pages/keepAlive2'

Vue.use(Router)
Vue.use(Mint)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/jsonp',
      name: 'jsonp',
      component: jsonp
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/amap',
      name: 'amap',
      component: amap
    },
    {
      path: '/bottomView',
      name: 'bottomView',
      component: bottomView
    },
    {
      path: '/transition',
      name: 'transition',
      component: transition
    },
    {
      path: '/toastView',
      name: 'toastView',
      component: toastView
    },
    {
      path: '/noticeTipView',
      name: 'noticeTipView',
      component: noticeTipView
    },
    {
      path: '/TabView',
      name: 'TabView',
      component: TabView
    },
    {
      path: '/titleView',
      name: 'titleView',
      component: titleView
    },
    {
      path: '/selectView',
      name: 'selectView',
      component: selectView
    },
    {
      path: '/keepAlive',
      name: 'keepAlive',
      component: keepAlive,

      children: [
        {
          path:'/keepAlive1',
          name:'keepAlive1',
          component: keepAlive1,
          meta: {
            title: 'keepAlive1',
            keepAlive: true
          }
        },
        {
          path:'/keepAlive2',
          name:'keepAlive2',
          component: keepAlive2
        }
      ]
    }
  ]
})
