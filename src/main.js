// 注意点:'vue'自动去node_modules文件夹中查找vue文件夹中的index.js
import Vue from 'vue'

import App from './App.vue'

new Vue({
	el:'#app',
	render:c=>c(App)
})