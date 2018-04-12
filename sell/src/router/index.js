import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/hello/HelloWorld1'
import Test from '@/components/hello/test'
import Header from '@/components/header/header'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
import Goods from '@/components/goods/goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld1',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/header',
      name: 'headera',
      component: Header
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ],
  // 点击激活的class属性名
  linkActiveClass: 'active'
})
