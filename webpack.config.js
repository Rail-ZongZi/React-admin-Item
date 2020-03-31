const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target: "web",
	entry: {
		'index': './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[chunkhash:8].js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						}
					}
				]
			}
		]
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: "React-admin后台管理系统",
			template: "./src/public/index.html",
			favicon: './src/favicon.ico'
		})
	],
	devServer: {
		host: '0.0.0.0',
		// hot: true,
		contentBase: path.join(__dirname, 'dist'),
		port: 9898
	}
};
