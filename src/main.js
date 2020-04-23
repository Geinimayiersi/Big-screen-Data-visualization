// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import '../static/font/iconfont.css'
// import $ from 'jquery/dist/jquery.js'
import jquery from 'jquery'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入echart
import echarts from 'echarts'
import '@/permission.js'
Vue.prototype.$jquery = jquery
Vue.prototype.$Cookies = Cookies
Vue.use(ElementUI)
Vue.prototype.$axios = axios
// 将echarts引入到vue的原型中
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.prototype.isLogin = false

// router跳转页面顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
