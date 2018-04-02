<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info">主要按钮</el-button>
    <el-button type="success">主要按钮</el-button>
    <el-button type="warining">主要按钮</el-button>
    
    <el-row>
		  <el-col :span="12"><div class="grid-content bg-purple">12</div></el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light">12</div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<Date></Date>
		  </div></el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light">12</div></el-col>
		</el-row>
  </div>
</template>

<script>
import Date from './components/Date.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  ,
  components:{
  	Date
  }
}
</script>

<style scoped lang="less">
@redcolor:red;
.height(@h){
	height: @h;
}
.grid-content{
	color: @redcolor;
	border: 1px solid red;
	.height(100px)
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
