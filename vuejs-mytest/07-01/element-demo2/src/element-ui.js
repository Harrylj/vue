import Vue from 'vue'

//单独引用的组件
import { Button, Select , TimeSelect, Radio, Pagination} from 'element-ui'


import App from './App.vue'




Vue.use(Button)
Vue.use(Select)
Vue.use(Radio)
Vue.use(TimeSelect)
Vue.use(Pagination)

//觉得长可以分开再写
import { Tabs,TabPane} from 'element-ui'
Vue.use(Tabs)
Vue.use(TabPane)
