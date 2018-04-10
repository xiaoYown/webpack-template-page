const webpack =	require('webpack')
const path 	=	require('path')
const glob 	=	require('glob')
const utils	=	require('./utils')
const config  = require('../config')
// 帮助生成 HTML 文件，在 body 元素中，使用 script 来包含所有你的 webpack bundles，只需要在你的 webpack 配置文件中如下配置：
// 搭配html-webapck-plugin使用,将css作为chunk追加到对应html中
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HappyPack = require('happypack')
// const happyThreadPool = HappyPack.ThreadPool({ size: 25 })
const isPro = process.env.NODE_ENV == 'production'

const entries = require('../config/entries').entries

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    // [name] 替换成chunk名称， [hash] 替换成对应chunk 的 hash 值, 解决hash的方式: 静态资源引入采用 import 方式
    filename: '[name].js', // 使用chunkhash : '[name]-[hash].js'
    publicPath: isPro ? config.build.assetsPublicPath : config.dev.assetsPublicPath // 文件引入路径
  },
  module: {
    // 配置脱离解析文件
    noParse: /node_modules\//,
    rules: [
      {
        test: /\.js$/,
        exclude:  /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: [['es2015', 'stage-2']]
          // "plugins": [
          // 	"syntax-dynamic-import",
          // 	"transform-async-to-generator",
          // 	"transform-regenerator",
          // 	["transform-runtime",
          // 	{
          // 		"helpers": false,
          // 		"polyfill": false,
          // 		"regenerator": true,
          // 		"moduleName": "babel-runtime"
          // 	}]
          // ]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[ext]')
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'config'	: path.resolve(__dirname, '../config')
    },
    extensions: ['.js', '.json']
  }
};

