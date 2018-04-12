
<template>
  <div>
      <v-header></v-header>
      <div class="tab">
          <div class="tab-item">
              <router-link to="/goods">商品</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/ratings">评论</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/seller">商家</router-link>
          </div>
      </div>
      <div class="content">I am content</div>
      <router-link to="/test">go to test</router-link>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      // border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
