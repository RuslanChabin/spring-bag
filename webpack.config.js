//basic
const path = require('path');
const webpack = require('webpack');
//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	
	entry: {
		app: ['./js/index.js',
			  './scss/style.scss',
			  ],
	},
	
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, './dist'),
		//publicPath: '../'
	},
	
	module: {
		rules: [
			{ 
			  test: /\.pug$/,
			  use: [{
				  loader: 'pug-loader',
			  	  options:{
					  pretty: true
				  },
			  }],
			},
			{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            	use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
			{
			test: /\.scss/,
			use: ExtractTextPlugin.extract({
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							url: false,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						},
					},
				],
				fallback: 'style-loader',
			})
			},
			{
				test: /\.(png|gif|jpe?g)$/,
				loader: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
					'img-loader',
				],
			},
			{
				test: /\.(woff|woff2|ttf|eot|otf|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						}
					},
				]
			}
		],
	},
	plugins: [
		new ExtractTextPlugin('./css/style.css'),
		
		new CopyWebpackPlugin(
			[
				{from:'./images', to: './images'},
				{from:'./fonts', to: './fonts'},
			]),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './pug/index.pug',
		  }),
		new HtmlWebpackPlugin({
			filename: 'news.html',
			template: './pug/news.pug',
		  }),
		new HtmlWebpackPlugin({
			filename: 'profile.html',
			template: './pug/profile.pug',
		  }),
		new HtmlWebpackPlugin({
			filename: 'gallery.html',
			template: './pug/gallery.pug',
		  }),
	],
};

