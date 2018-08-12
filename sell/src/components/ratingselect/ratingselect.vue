<template>
 <div class="ratingselect">
   <div class="rating-type border-1px">
     <span class="block positive" @click="select(2,$event)" :class="{'active':myselectType===2}" >{{desc.ALL}}<span class="count">{{ratings.length}}</span></span>
     <span class="block positive" @click="select(0,$event)" :class="{'active':myselectType===0}" >{{desc.POSITIVE}}<span class="count">{{positives.length}}</span></span>
     <span class="block negative" @click="select(1,$event)" :class="{'active':myselectType===1}" >{{desc.NEGATIVE}}<span class="count">{{negatives.length}}</span></span>
   </div>
   <div>{{desc}}------{{ratings}}</div>
   <div>是什么{{onlyContent}}</div>
   <div class="switch"  @click="toggleContent($event)" :class="{'on':myonlyContent}">
     <span class="iconfont icon-gou iconfont_circle"></span>
     <span class="text">查看评论内容{{onlyContent}}</span>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
const POSITIVE = 0
const NEGATIVE = 1
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
      // type: Number,
      // default: ALL
    },
    onlyContent: {
      // type: Boolean,
      // default: false
    },
    desc: {
      type: Object,
      default () {
        return {
          POSITIVE: '满意',
          NEGATIVE: '吐槽',
          ALL: '全部'
        }
      }
    }
  },
  data () {
    return {
      myselectType: this.selectType,
      myonlyContent: this.onlyContent,
    }
  },
  computed: {
    positives () {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    negatives () {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    select (type, event) {
      if (!event._constructed) {
        return
      }
      this.myselectType = type
      // 子组件传递给父组件
      this.$emit('select-type', type)
      // console.log(this.myselectType, this.selectType,this.abc)
    },
    toggleContent (event) {
      if (!event._constructed) {
        return
      }
      this.myonlyContent = !this.myonlyContent
      this.$emit('only-content', this.myonlyContent)
      // console.log(this.myonlyContent)
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
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7,17,27,01)
      color rgb(147,153,159)
      font-size 0
      &.on
        .iconfont_circle
          color #00c850
      &.iconfont_circle
        display inline-block
        vertical-align top
        margin-right 4px
        font-size 24px
      .text
        font-size 12px
</style>
