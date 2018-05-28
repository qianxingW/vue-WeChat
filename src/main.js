// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router/router'
import store from './store/'
Vue.use(Router)

const router = new Router({
  routes
})

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
