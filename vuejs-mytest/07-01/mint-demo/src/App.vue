<template>
  <div id="app">
    <img src="./assets/logo.png">
    <mt-header fixed title="固定在顶部"></mt-header>
    
    <div class="app-btn-div">
    	<mt-button type="default" @click="open">default</mt-button>
			<mt-button type="primary" @click="two">primary</mt-button>
			<mt-button type="danger" @click="get">danger</mt-button>
			<p>{{value2}}</p>
    </div>
		<div>
			<mt-radio
			  title="单选框列表"
			  v-model="value"
			  :options="['选项A', '选项B', '选项C']">
			</mt-radio>
			<mt-cell title="标题文字" value="说明文字">{{value}}</mt-cell>

		</div>
		<div class="page-swipe">
			<mt-swipe :auto="4000">
			  <mt-swipe-item class="slide1">1</mt-swipe-item>
			  <mt-swipe-item class="slide2">2</mt-swipe-item>
			  <mt-swipe-item class="slide3">3</mt-swipe-item>
			</mt-swipe>

		</div>
		<div>
			<mt-tabbar class="is-fixed" v-model="selected">
			  <mt-tab-item id="外卖">
			    <img slot="icon" src="./assets/logo.png">
			    外卖
			  </mt-tab-item>
			  <mt-tab-item id="订单">
			    <img slot="icon" src="./assets/logo.png">
			    订单
			  </mt-tab-item>
			  <mt-tab-item id="发现">
			    <img slot="icon" src="./assets/logo.png">
			    发现
			  </mt-tab-item>
			  <mt-tab-item id="我的">
			    <img slot="icon" src="./assets/logo.png">
			    我的
			  </mt-tab-item>
			</mt-tabbar>

		</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '外卖',
      value2: '加载数据',
      value:''
    }
  },
  methods:{
  	open(){
  		let instance = Toast({
													  message: '操作成功',
													  iconClass: 'icon icon-success',
													  position: 'top'
													});
			setTimeout(() => {
			  instance.close();
			}, 1000);
  	},
  	two(){
  		Indicator.open('加载中...');
  		setTimeout(() => {
  			Indicator.close();
  		},2000)
  	},
  	get(){
  		Indicator.open('加载中...');
  		axios.get('https://api.github.com/users/itstrive')
		  .then(function (response) {
		    console.log(response);
		    this.value2 = response.data;
		    Indicator.close();
		  }.bind(this))
		  .catch(function (error) {
		    console.log(error);
		  });
  	}
  }
}
</script>

<style>

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}

</style>
