<template>
 <div class="ratingselect">
   <div class="rating-type border-1px">
     <span class="block positive">{{desc.ALL}}<span class="count">47</span></span>
     <span class="block positive">{{desc.POSITIVE}}<span class="count">40</span></span>
     <span class="block negative">{{desc.NEGATIVE}}<span class="count">7</span></span>
   </div>
   <div class="switch">
     <span class="iconfont"></span>
     <span class="text">查看评论内容</span>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
// const POSITIVE = 0
// const NEGATIVE = 1
const ALL = 2
export default {
  props: {
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default () {
        return {
          POSITIVE: '满意',
          NEGATIVE: '不满意',
          ALL: '全部'
        }
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .ratingselect
    .rating-type
      padding 18px 0
      margin 0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size 0
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        border-radius 1px
        font-size 12px
        color rgb(77,85,93)
        line-height 16px
        &.active
          color #fff
        .count
          margin-left 2px
          font-size 10px
        &.positive
          background rgba(0,160,220,0.2)
          &.active
            background rgb(0,160,220)
        &.negative
          background rgba(77,85,93,0.2)
          &.active
            background rgb(77,85,93)
</style>
