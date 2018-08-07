// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './store'
import {getStore, setStore} from '@/utils/storage.js'
import {setWechatTitle}     from "./utils/setWechatTitle"

Vue.config.productionTip = false

/* eslint-disable no-new */
// let getBaseUrl = ['/pk10', '/orderList', '/orderList', '/my']
router.beforeEach((to, from, next) => {
  // 设置页面标题
  typeof to.meta.pageTitle !== undefined && setWechatTitle(to.meta.pageTitle)

  // 设置页面body的背景
  document.body.className = ""
  if(typeof to.meta.bodyClass != "undefined") {
    document.body.className = to.meta.bodyClass
  }
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
