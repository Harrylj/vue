
<template>
  <div>
      <v-header :seller="seller"></v-header>
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
          <div class="tab-item">
              <router-link to="/test">测试</router-link>
          </div>
      </div>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <keep-alive>
      <router-view :seller="seller"></router-view>
      </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入解析url参数
import {urlParse} from './common/js/myutil'
import header from './components/header/header'
const ERR_OK = 0
export default {
  name: 'App',
  data () {
    return {
      seller: {
        // 获取店铺id
        id: (() => {
          let queryParam = urlParse()
          console.log(queryParam)
          return queryParam.id
        })()
      }
    }
  },
  created () {
    // vue-resourse use
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        // this.seller = response.data
        // 给对象扩展属性
        this.seller = Object.assign({}, this.seller, response.data)
        console.log(this.seller.id)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "common/stylus/mixin.styl";
   .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      border-1px(rgba(7, 17, 27, 0.1))
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
