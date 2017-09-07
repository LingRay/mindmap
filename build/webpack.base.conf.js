var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require("webpack")

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    // 'bower_codemirror': './bower_components/codemirror/lib/codemirror.js',
    // 'bower_codemirror_xml.js': './bower_components/codemirror/mode/xml/xml.js',
    // 'bower_codemirror_javascript': './bower_components/codemirror/mode/javascript/javascript.js',
    // 'bower_codemirror_cssjs': './bower_components/codemirror/mode/css/css.js',
    // 'bower_codemirror_htmlmixed': './bower_components/codemirror/mode/htmlmixed/htmlmixed.js',
    // 'bower_codemirror_markdown': './bower_components/codemirror/mode/markdown/markdown.js',
    // 'bower_codemirror_overlay': './bower_components/codemirror/addon/mode/overlay.js',
    // 'bower_codemirror_gfm': './bower_components/codemirror/mode/gfm/gfm.js',
    // // 'bower_angular-ui-codemirror':'./bower_components/angular-ui-codemirror/ui-codemirror.js',
    // 'bower_marked': './bower_components/marked/lib/marked.js',
    // 'bower_kity': './bower_components/kity/dist/kity.js',
    // 'bower_hotbox': './bower_components/hotbox/hotbox.js',
    // 'bower_jsondiff': './bower_components/json-diff/json-diff.js',
    // 'bower_kityminder_core': './bower_components/kityminder-core/dist/kityminder.core.js',
    // 'bower_color_picker':'./bower_components/color-picker/dist/color-picker.js',
    'app': './src/main.js',
    // 'runtimejs': './src/script/editor.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.json'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({jQuery: "jquery", $: "jquery"})
  ]
}
