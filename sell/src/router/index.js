import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/hello/HelloWorld1'
import test from '@/components/hello/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/:userId',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
