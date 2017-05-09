// 注意点:'vue'自动去node_modules文件夹中查找vue文件夹中的index.js
import Vue from 'vue'

// 根组件
import App from './App.vue'

// 父组件注册和使用子组件以及父组件向子组件传入数据
// import App from './components/parent.vue'

// 实例化一个vue
new Vue({
	el:'#app',
	render:c=>c(App)
})