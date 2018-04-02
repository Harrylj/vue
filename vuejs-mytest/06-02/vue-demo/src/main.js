import Vue from 'vue'
//调用vue-router
import VueRouter from 'vue-router'

import App from './App.vue'
//引用路由配置
import routerConfig from './router.config.js'

import './assets/css/bg.css'

import './assets/css/animate.css'
/*
//require('./assets/css/bg.css')
//使用vue-router
*/
Vue.use(VueRouter)

//创建路由,要将路由配置添加进来
const router = new VueRouter(routerConfig);

new Vue({
	router,   //使用路由
  el: '#app',
  render: h => h(App)
})
