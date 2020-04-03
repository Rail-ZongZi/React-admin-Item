const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css分离打包

module.exports = {
	target: "web",
	entry: {
		'index': './src/index.jsx'
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
        test: /\.css$/i,
        use: 'css-loader'
      },
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
          MiniCssExtractPlugin.loader,
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
              name: '[path][name].[ext]',
              // publicPath: "images/",
              // outputPath: "images/",  // 打包以后dist文件images文件中
							limit: 8192,
						}
					}
				]
			},
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[chunkhash:8].[ext]'
          }
        }
      }
		]
	},
	devtool: "cheap-module-eval-source-map",
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: "React-admin后台管理系统",
			template: "./public/index.html",
			favicon: './public/favicon.ico'
		}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[id].[chunkhash:8].css'
    })
	],
	devServer: {
		host: '0.0.0.0',
		// hot: true,
		contentBase: path.join(__dirname, 'dist'),
		port: 9898
	}
};
