<template>
  <div class="hello">
    <div class="hc-left" ref="hc_left">
      <ul>
        <li class="left-list" :class="{'current':current == index}" v-for="(number,index) of num" @click="clickMove(index)" v-bind:key="index">{{number}}</li>
      </ul>
    </div>
    <div class="hc-right" ref="hc_right">
      <ul>
        <li class="right-list" v-for="(number,index) of num" v-bind:key="index">{{number}}{{number}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      // 高度数组
      heightArr: [],
      // 速度
      speed: 300,
      // 当前index
      current: 0
    }
  },
  created () {
    this.$nextTick(() => {
      this.scroll_left = new BScroll(this.$refs.hc_left, {
        // 允许执行点击事件
        click: true
      })
      this.scroll_right = new BScroll(this.$refs.hc_right, {
        // 允许执行点击事件
        click: true,
        // 滚动的探针---加了这个才能在滚动时获取到数据
        probeType: 3
      })
      // 右侧滚动时获取到Y值
      this.scroll_right.on('scroll', (pos) => {
        // 取整的绝对值
        this.scrollY = Math.abs(Math.round(pos.y))
        let i = 0
        let el = document.getElementsByClassName('left-list')
        // 比较数组大小，得出对应的index
        for (i; i < this.heightArr.length; i++) {
          // 当大于时则跳出循环
          if (this.scrollY < this.heightArr[i]) {
            // 跳出循环
            break
          }
        }
        // 左侧滚动到与右侧对应的位置
        this.scroll_left.scrollToElement(el[i],this.speed)
        this.current = i
      })
      // 调用右侧的高度数组
      this._calculateHeight()
    })
  },
  methods: {
    // 点击左侧跳转到对应位置
    clickMove (index) {
      let el = document.getElementsByClassName('right-list')
      this.scroll_right.scrollToElement(el[index], this.speed)
      this.current = index
    },
    // 计算右侧的高度数组
    _calculateHeight () {
      let el = document.getElementsByClassName('right-list')
      let heightAll = 0
      for (let i = 0; i < el.length; i++) {
        heightAll = heightAll + el[i].clientHeight
        this.heightArr.push(heightAll)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: absolute;
  top: 174px;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  overflow: hidden;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 100%;
  line-height: 60px;
  border: 1px solid red;
  text-align: center
}
a {
  color: #42b983;
}
.hello-content{
  display: flex;
}
.hc-left{
  width: 100px;
  flex: 0 0 100px
}
.hc-right{
  flex: 1
}
.hc-right li{
  line-height: 100px
}
.right-list:nth-child(2n+1){
  line-height: 200px
}
.hc-left .current{
  background-color: red;
  color: white;
}
</style>
