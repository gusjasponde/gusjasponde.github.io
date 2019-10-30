var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: {
		app: [
			'./src/index.js'
		],
	},
	target: 'web',
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.join(__dirname, 'site'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Gustavo Jasponde | Github',
			filename: 'index.html',
			template: 'src/index.html',
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new CopyWebpackPlugin([
			{ from: 'gusjasponde.pgp' }
		])
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				include: path.join(__dirname, 'source'),
				loaders: ['html-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test   : /(\.scss)$/,
				loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
			},
			{
				test: /(\.css)$/,
				loaders: ['style-loader', 'css-loader'],
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
			}
		]
	}
}
