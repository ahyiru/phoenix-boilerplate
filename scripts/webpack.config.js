var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

var appName=require('../package').description;
var config=require('../configs');

var rootDir=config.DEV_ROOT_DIR;
var startDist=config.START_DIST;

let commons=['react','react-dom'];
if(startDist==='vue'){
  commons=['vue','vue-router'];
}

const src = path.resolve(__dirname, '../');
const app = path.resolve(src,startDist);
const nodeModules = path.resolve(src,'node_modules');

module.exports = {
  context: src,

  entry: {
    app: [ path.resolve(app, 'index.js')],
    commons:commons,
  },
  output: {
    path: path.resolve(src, '_dist'),
    publicPath: rootDir,
    filename: 'js/[name]_[hash:8].js',
    chunkFilename:'js/[name]_[chunkhash:8].chunk.js',
    libraryTarget:'umd',
  },
  resolve: {
    modules: [
      app,
      nodeModules,
    ],
    extensions: ['.js','.mjs','.jsx','.ts','.tsx','.json','.css','.less','.vue','.vuex'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src'),
    },
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader:'babel-loader',
      exclude:[nodeModules],
    },{
      test: /\.tsx?$/,
      use:[
        {loader:'babel-loader'},
        {loader:'ts-loader',options:{transpileOnly:true}},
      ],
      exclude:[nodeModules],
    },{
      test: /\.vue$/,
      loader:'vue-loader',
      /*options:{
        loaders:{
          js:'coffee-loader',
        },
        preLoaders: {
          js:'/path/to/custom/loader',
        },
        postLoaders: {
          html:'babel-loader',
        },
        excludedPreLoaders:/(eslint-loader)/,
      },*/
      exclude:[nodeModules],
    },{
      test: /\.(jpe?g|png|gif|psd|bmp|ico)/i,
      loader: 'file-loader?name=img/img_[hash:8].[ext]',
    },{
      test: /\.(ttf|eot|svg|woff|woff2|otf)/,
      loader: 'file-loader',
      options:{
        name:'css/fonts/[hash:8].[ext]',
        publicPath:'../',
      },
    }, {
      test: /\.(pdf)/,
      loader: 'file-loader?name=pdf/[hash].[ext]',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file-loader?name=video/[hash].[ext]',
    }],
  },
  mode:process.env.NODE_ENV === 'production' ? 'production' : 'development',
  optimization:{
    minimize:true,
    concatenateModules:true,
    occurrenceOrder:true,
    splitChunks:{
      chunks:'all',
      minSize:0,
      minChunks:2,
      maxInitialRequests:5,
      cacheGroups:{
        commons:{
          chunks:'initial',
          name:'commons',
          reuseExistingChunk:true,
        },
        vendors:{
          chunks:'initial',
          name:'vendors',
          test:/[\\/]node_modules[\\/]/,
          enforce:true,
          priority:-10,
        },
      },
    },
    runtimeChunk:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:appName,
      template: path.resolve(src, './public/index.html'),
      favicon: path.resolve(src, './public/favicon.ico'),
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        // conservativeCollapse: true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      // debug: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new VueLoaderPlugin(),
  ],
};
