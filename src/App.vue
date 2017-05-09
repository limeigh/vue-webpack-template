<template>
	<div class="tmpl">
		{{msg}}
		<div>
			<hr>
			1.0 v-model指令,双向数据绑定<br>
			<input type="text" v-model="msg">
			<hr>
			2.0 v-text指令<br>
			<span v-text="msg"></span>
			<hr>
			3.0 v-html指令<br>
			<span v-html="msg1"></span>
			4.0 v-bind指令<br>
			<!-- v-bind:title="这里可以是一个变量",简写形式->:title="" -->
			<span v-text="msg" :title="tip"></span>
			<hr>
			5.0 v-if指令<br>
			<!-- 不显示的时候使用注释<!-\- -\->占位 -->
			<span v-if="isOk" v-text="msg"></span>
			<hr>
			6.0 v-show指令<br>
			<!-- 不显示的时候直接加上display:none -->
			<span v-show="isOk" v-text="msg"></span>
			<hr>
			7.0 v-on注册事件<br>
			<!-- v-on:click="click"简写形式->@click -->
			<button v-on:click="click">显示或隐藏v-if和v-show中的内容</button>
			<hr>
			8.0 v-for指令<br>
			<!-- 第一种写法 -->
			<ul>
				<!-- 方式一 -->
				<li v-for="item in names">{{item}}</li>
				<!-- 方式二 -->
				<!-- <li v-for="item in names"><span v-text="item"></span></li> -->
				<!-- 方式三 -->
				<!-- <li v-for="item in names"><span v-html="item"></span></li> -->
			</ul>
			<!-- 第二种写法 推荐使用 :key="index"表示当前元素的唯一标识-->
			<ul>
				<li v-for="(item,index) in names" :key="index">{{index}}--{{item}}</li>
			</ul>
			<!-- 第三种写法 能够遍历一个对象中所有属性的值-->
			<ul>
				<li v-for="item in user">{{item}}</li>
			</ul>
			<!-- 第四种写法 能够遍历一个对象中所有属性的值 显示值和属性的名称-->
			<ul>
				<li v-for="(item,key,index) in user" :key="index">{{index}},{{key}},{{item}}</li>
			</ul>
			<!-- 第五种写法 能够遍历一个整数-->
			<ul>
				<li v-for="item in 3">{{item}}</li>
			</ul>
		</div>
		<parentVue></parentVue>
	</div>
</template>

<script>
// 在vue根组件中导入parent组件
import parentVue from './components/parent.vue'

	export default{
		data(){
			return {
				msg:'hello world!!',
				msg1:'<h1>hello world!</h1>',
				tip:'提示',
				isOk:0,
				names:['诸葛亮','曹操','刘备','刘备'],
				user:{name:'曹操',age:400}
			}
		},
		methods:{
			click(){
				this.isOk=!this.isOk
			}
		},
		components:{
			parentVue
		} //注册parent组件
	}
</script>

<style>
	.tmpl{
		color: green
	}
</style>