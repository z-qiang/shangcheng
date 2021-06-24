import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './style/index.less'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.use(VueLazyload)
FastClick.attach(document.body)

// 仅仅只是VueScroller需要全局注册
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

