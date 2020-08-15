const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
var path = require('path')

module.exports = merge(common, {
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