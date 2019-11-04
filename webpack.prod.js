const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var path = require('path')

module.exports = merge(common, {
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: false,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
	},	
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			},
		})
	],
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.join(__dirname, '/'),
	}
})