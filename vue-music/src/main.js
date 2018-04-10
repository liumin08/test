import Vue from 'vue'
import App from './App'
import router from './router'
import attachFastClick from "fastclick"
// 消除移动端点击事件的300ms延迟
attachFastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
