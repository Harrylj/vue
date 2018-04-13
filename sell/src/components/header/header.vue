<template>
    <div class="header">
        我是header{{msg}}
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar"/>
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <!-- 时间：2018-04-13 描述：这里的v-if判断，是因为刚生产组件时seller我们定义了是空对象，后通过异步获取对象值，才能显示内容 -->
          <div v-if="seller.supports" class="support">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'headera',
  data () {
    return {
      msg: 'header!!Welcome to Your Vue.js App 2018-04-10'
    }
  },
  props: {
    seller: {
      type: ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .header
    color: #fff
    background: #000
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
</style>
