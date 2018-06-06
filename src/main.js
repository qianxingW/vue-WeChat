// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router/router'
import VueTouch from 'vue-touch'
import fastclick from 'fastclick'
import store from './store/'

Vue.use(Router)
// 由于目前vue-touch不支持vue2.0.0以上 所以使用npm install vue-touch@next
Vue.use(VueTouch, {name: 'v-touch'})

const router = new Router({
  routes
})

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
