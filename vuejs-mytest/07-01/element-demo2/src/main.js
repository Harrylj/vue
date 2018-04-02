import Vue from 'vue'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'

//引用创建的element-ui.js
import './element-ui.js'

//Vue.use(ElementUI)


new Vue({
  el: '#app',
  render: h => h(App)
})
