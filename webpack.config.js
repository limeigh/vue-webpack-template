var HtmlwebpackPlugin=require('html-webpack-plugin')
module.exports={
	entry:'./src/main.js',
	output:{
		// path:__dirname+'/dist',
		filename:'build.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:'index',
			filename:'index.html',
			template:'index1.html'
		})
	]
}