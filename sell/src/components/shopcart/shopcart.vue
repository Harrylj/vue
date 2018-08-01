<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highLight':totalCount>0}">
            <i class="iconfont icon-gouwuche"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highLight':totalPrice>0}">&yen;{{totalPrice}}</div>
        <div class="desc">另需配送费&yen;{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
         {{payDesc}}
        </div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="(ball,index) in balls" v-bind:key="index">
        <transition name="drop" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <div v-show="ball.show" class="ball">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  // name: 'shopcart',
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [
          {
            price: 5,
            count: 2
          }
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      // 下落的小球
      dropBall: []
    }
  },
  computed: {
    // 商品总价
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    // 商品总数
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    // 判断是否显示去配送，或差多少钱起配送
    payDesc () {
      if (this.totalprice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    // 判断是否显示去配送的class
    payClass () {
      if (this.totalPrice < this.minPrice) {
        return 'no-enough'
      } else {
        return 'enough'
      }
    }
  },
  methods: {
    drop (el) {
      console.log(el)
      // 遍历balls
      for (let i = 0; i < this.balls.lenght; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBall.push(ball)
          return
        }
      }
    },
    beforeEnter (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls(count)
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect()
          let x = rect.left - 32
          let y = -(window.innetHeight - rect.top - 22)
          el.style.display = ''
          el.style.webkitTransform = `translate3d(0,${y}px,0)`
          el.style.transform = `translate3d(0,${y}px,0)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`
          inner.style.transform = `translate3d(${x}px,0,0)`
        }
      }
    },
    enter (el) {
      /* eslint-dosable no-unused-vars */
      // 触发浏览器重绘
      // let rf = el.offestHeight
      this.$nextTick(() => {
        el.style.display = ''
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = 'translate3d(0,0,0)'
        inner.style.transform = 'translate3d(0,0,0)'
      })
    },
    afterEnter (el) {
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height 48px
  .content
    display flex
    font-size 0
    background-color #141d27
    color rgba(255,255,255,0.4)
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        box-sizing border-box
        border-radius 50%
        background-color #141d27
        .logo
          width 100%
          height 100%
          border-radius 50%
          background #2b343c
          text-align center
          &.highLight
            background rgb(0,160,220)
            .icon-gouwuche
              color #ffffff
          .icon-gouwuche
            line-height 44px
            font-size 24px
            color #80858a
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          text-align center
          border-radius 16px
          line-height 16px
          font-size 9px
          font-weight 700
          color #ffffff
          background rgb(240,20,20)
          box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
      .price
        display inline-block
        vertical-align top
        margin-top 12px
        line-height 24px
        box-sizing border-box
        padding-right 12px
        border-right 1px solid rgba(255,255,255,0.1)
        font-size 16px
        font-weight 700
        &.highLight
          color #00a0dc
      .desc
        display inline-block
        vertical-align top
        line-height 24px
        margin 12px 0 0 12px
        font-size 16px
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        height 48px
        line-height 48px
        text-align center
        font-size 12px
        &.no-enough
          background rgba(255,255,255,0.4)
        &.enough
          background green
          color #fff
  .ball-container
    .ball
      position fixed
      left 32px
      bottom 22px
      z-index 200
      &.drop-transition
        transition  all 0.4s
      .inner
          display inline-block
          width 16px
          height 16px
          border-radius 50%
          background rgb(0,160,220)
          transition all 0.4s
</style>
