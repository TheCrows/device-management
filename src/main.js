import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
   

// import Es6Promise from 'es6-promise'
// Es6Promise.polyfill()


//axios
// import axios from 'axios'
// import Qs from 'qs'
// axios.defaults.paramsSerializer=function(params) {
//   return Qs.stringify(params, {arrayFormat: 'brackets'})
// },
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$ajax = axios
import HttpAgent from '@/api/index.js'
Vue.prototype.$ajax = HttpAgent

// vue路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routers from '@/router/index.js'
const router = new VueRouter({
  routes: routers
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth){
    if(!localStorage.getItem(`userName`)){
      if(from.path=='/'||from.path=='/login'){
        next()
      }else{
        next('/')
      }
    }else{
      next()
    }
  }else{
    next()
  }
})
//vuex
// import Vuex from 'vuex'
import store from './vuex/store'
// Vue.use(Vuex)

//element_ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//拖动插件
import VueDND from 'awe-dnd'
Vue.use(VueDND)

//自定义小工具
import $utils from '@/api/assist/utils.js'
Vue.prototype.$utils = $utils

Vue.config.productionTip = false

// console.log(CKEDITOR);
// setTimeout(() => {
//   console.log(CKEDITOR);
// }, 1000);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
