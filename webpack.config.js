const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		'index': './src/index/js'
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[chunkhash:8].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: "React-admin后台管理系统",
			template: "./src/models/index.html",
			favicon: './src/favicon.ico'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9898
	}
};
