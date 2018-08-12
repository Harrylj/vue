<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="iconfont icon-zuoyoujiantou icon-arrow_list"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.selleCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">&yen;{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">&yen;{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <transition name="fade">
          <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count === 0">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect @select-type="selectTypeVal" @only-content="onlyContentVal" :desc="desc" :ratings="food.ratings" :onlyContent="onlyContent"></ratingselect>
          <div>{{selectType}}---abc={{abc}}----onlyContent={{onlyContent}}</div>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-show="needShow(rating.rateType,rating.text)"  v-for="(rating,index) in food.ratings" v-bind:key="index" class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12px" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime}}</div>
                <p class="text">
                  <span class="iconfont" :class="{'icon-damuzhi':rating.rateType===0,'icon-down':rating.rateType===1}"></span>
                  <span>{{rating.text}}</span>
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Vue from 'vue'
import cartcontrol from '../../components/cartcontrol/cartcontrol'
import split from '../../components/split/split'
import ratingselect from '../../components/ratingselect/ratingselect'
// const POSITIVE = 0
// const NEGATIVE = 1
const ALL = 2
export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        ALL: '全部',
        POSITIVE: '推荐',
        NEGATIVE: '吐槽'
      },
      abc :123
    }
  },
  methods: {
    show () {
      this.showFlag = true
      this.selectType = ALL
      this.onlyContent = true
      // 绑定滚动
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.food, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    hide () {
      this.showFlag = false
    },
    //
    addFirst (event) {
      // 防止多次点击
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      console.log(event.target)
      console.log(this.selectType, this.onlyContent)
      // this.$dispatch('cart.add',event.target)
    },
    // 点击 全部 满意 吐槽 筛选显示内容
    needShow (type, text) {
      console.log(type, text,this.selectType)
      // 如果相等则显示
      if (type==this.selectType) {
        return true
      }else if(this.selectType<type){
        return true
      }
      else{
        return false
      }
      /*
      if (this.onlyContent && !text) {
        return false
      }
      if (this.selectType === ALL) {
        return true
      } else {
        return type === this.selectType
      }
      */
     if (this.onlyContent) {
       return this.onlyContent
     }
    },
    //
    selectTypeVal: function (type) {
      this.selectType = type
      this.abc = 11111
      alert(type)
    },
    onlyContentVal (bb) {
      this.onlyContent = bb
      alert(bb)
    }
  },
  events: {
    'ratingtype.select' (type) {
      this.selectType = true
    },
    'content.toggle' (onlyContent) {
      this.onlyContent = onlyContent
    }
  },
  components: {
    cartcontrol,
    split,
    ratingselect
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"
  .food
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 30
    width 100%
    background #fff
    transition all 0.2s linear
    &.move-transition
      transform translate3d(0,0,0)
    &.move-enter,&.move-leave
      transform translate3d(100%,0,0)
    .image-header
      position relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .back
        position absolute
        top: 10px
        left 0
        .icon-arrow_list
          display block
          padding 10px
          font-size 20px
          color #fff
          transform rotate(180deg)
    .content
      position relative
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color rgb(7,17,27)
      .detail
        margin-bottom 18px
        line-height 10px
        font-size 0
        .sell-count,.rating
          font-size 10px
          color rgb(147,153,159)
        .sell-count
          margin-right 12px
      .price
        font-weight 700
        line-height 24px
        .now
          margin-right 8px
          font-size 14px
          color rgb(240,20,20)
        .old
          text-decoration line-through
          font-size 14px
          color rgb(147,153,159)
    .cartcontrol-wrapper
      position absolute
      right 12px
      bottom 12px
    .buy
      position absolute
      right 18px
      bottom 18px
      z-index 10
      height 24px
      line-height 24px
      padding 0 12px
      box-sizing border-box
      border-radius 12px
      font-size 10px
      color #fff
      background #00a0dc
      &.fade-transition
        transition all 0.2s
        opacity 1
      &.fade-enter, &.fade-leave
        opacity 0
    .info
      padding 18px
      .title
        line-height 14px
        margin-bottom 6px
        font-size 14px
        color rgb(7,17,27)
      .text
        line-height 24px
        padding 0 8px
        font-size 12px
        color rgb(77,85,93)
    .rating
      padding-top 18px
      .title
        line-height 14px
        margin-left 18px
        font-size 14px
        color rgb(7,17,27)
      .rating-wrapper
        padding 0 18px
        .rating-item
          position relative
          padding 16px 0
          border-1px(rgba(7,17,27,0.1))
          .user
            position absolute
            right 0
            top 16px
            line-height 12px
            font-size 0
            .name
              display inline-block
              margin-right 6px
              vertical-align top
              font-size 10px
              color rgb(147,153,159)
            .avatar
              border-radius 50%
          .time
            margin-bottom 6px
            line-height 12px
            font-size 10px
            color rgb(147,153,159)
          .text
            line-height 16px
            font-size 12px
            color rgb(7,17,27)
            .icon-damuzhi,.icon-down
              margin-right 4px
              line-height 24px
              font-size 12px
            .icon-damuzhi
              color rgb(0,168,220)
            .icon-down
              color rgb(147,153,159)
</style>
