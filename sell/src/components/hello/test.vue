<template>
  <div class="post">
  	aaaaaaaaaaaaaaa
    <div class="loading">
      Loading...{{abc}}
    </div>
  </div>
</template>

<script>
	/*
var appData = require('../data.json');
var seller = appData.seller;
var  goods = appData.goods;
var ratings = appData.ratings;
*/
export default {
  data () {
    return {
      post: null,
      error: null,
      abc : '1111'
    }
  },
  beforeRouteEnter (to, from, next) {
  	/*
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
    */
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
