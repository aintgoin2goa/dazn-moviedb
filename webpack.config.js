const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	resolve: {
		modules: ["node_modules", path.resolve(__dirname, "bower_components")],
		extensions: [".js", ".scss", "*"]
	},
	context: path.join(__dirname, '/client'),
	entry: {
		main: './main.js',
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
				options: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.scss$/,
				loader:  ExtractTextPlugin.extract('css-loader!sass-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};
