const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var path = require('path')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: '/build',
		hot: true,
		inline: true,
		port: 3000,
	},
	plugins: [
		new CleanWebpackPlugin()
	],
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.join(__dirname, 'site'),
	},
})
