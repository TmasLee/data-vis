const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: ['./src/dom.js'],
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: [path.resolve('./lib'), path.resolve('./node_modules')]
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		publicPath: '/',
		compress: true,
		contentBase: path.resolve(__dirname, 'public'),
		inline: true,
		port: 8080,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};

module.exports = config;
