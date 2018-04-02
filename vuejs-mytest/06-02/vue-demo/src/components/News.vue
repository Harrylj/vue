<template>
	<div>
		<h3>我是一个新闻</h3>
		<ul>
			<li v-for='(val,index) in list' :key="index">{{val}}</li>
		</ul>
	</div>
	
</template>
<script>
	export default{
		name:'news',
		data(){
			return {
				list:['11111','222222','3333333333','444444']
			}
		}
	}
</script>

<style scoped>
	li{border: 1px solid red;}
</style>