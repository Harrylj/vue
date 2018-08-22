<template>
  <div class="hello" ref="hello">
    <button @click="abc">abc</button>
    <div class="hc-left" ref="hc_left">
      <ul>
        <li class="left-list" v-for="(number,index) of num" @click="clickMove(index)" v-bind:key="index">{{number}}</li>
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
// 首先获取是第几个元素。再获取元素的高度。把之前元素的高度加起来
import BScroll from 'better-scroll'
export default {
  name: 'test222222',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App  2018-04-08',
      loading: false,
      error: null,
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  },
  created () {
    this.$nextTick(() => {
      // this.scroll = new BScroll(this.$refs.hello, {
      //   click: true
      // })
      this.scroll_left = new BScroll(this.$refs.hc_left, {
        click: true
      })
      this.scroll_right = new BScroll(this.$refs.hc_right, {
        click: true,
        // 滚动的探针
        probeType: 3
      })
      // 滚动时获取到Y值
      this.scroll_right.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        console.log(this.scrollY)
        console.log(this.scroll_right.y)
      })
    })
  },
  methods: {
    abc () {
      let el = document.getElementsByClassName('right-list')
      this.scroll_right.scrollToElement(el[8], 300)
    },
    clickMove (index) {
      let speed = 300
      let el = document.getElementsByClassName('right-list')
      this.scroll_right.scrollToElement(el[index], speed)
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
</style>
