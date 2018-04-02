<template>
	<div id="app">
		<div>
			<div>
				<el-button @click="get">默认按钮</el-button>
				<p>{{msgtwo}}</p>
				<el-button type="primary">主要按钮</el-button>
				<el-button type="text">文字按钮</el-button>
			</div>

			<div>
				<el-time-select v-model="value1" :picker-options="{
			    start: '08:30',
			    step: '00:15',
			    end: '18:30'
			  }" placeholder="选择时间">
				</el-time-select>
			</div>

			<div>
				<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
				<el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
			</div>
			<div>
				<div class="block">
					<span class="demonstration">页数较少时的效果</span>
					<el-pagination layout="prev, pager, next" :total="50">
					</el-pagination>
				</div>
				<div class="block">
					<span class="demonstration">大于 7 页时的效果</span>
					<el-pagination layout="prev, pager, next" :total="1000">
					</el-pagination>
				</div>
			</div>

			<div>
				<tabs></tabs>
			</div>
			<div>
				 <mybutton @click.native="get"></mybutton>
			</div>
		</div>



	</div>
</template>

<script>

  //引入tabs组件
	import tabs from './components/tabs.vue'
	//引入button组件
	import mybutton from './components/button.vue'
	//引用axios插件
	import axios from 'axios'
	
	export default {
		name: 'app',
		data() {
			return {
				msgtwo : '默认数据',
				msg: 'Welcome to Your Vue.js App',
				value1: '',
				radio: '1'
			}
		},
		//使用引入的组件
		components: {
			tabs,
			mybutton
		},
		mounted(){
			this.get()
		}
		,
		methods:{
			get(){
				axios.get('https://api.github.com/users/itstrive')
				.then(function(res){
					//console.log(res)
					this.msgtwo = res.data;
				}.bind(this))
				.catch(function(err){
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	h1,
	h2 {
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