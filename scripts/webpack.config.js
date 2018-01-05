var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var appName=require('../package').description;
var rootDir=require('../configs').rootDir;

const src = path.resolve(__dirname, '../');
const app = path.resolve(src,'app');
const nodeModules = path.resolve(src,'node_modules');

module.exports = {
  context: src,

  entry: {
    app: [ path.resolve(app, 'index.js')],
    commons:['react','react-dom'],
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
    extensions: ['.js','.jsx','.ts','.tsx','.json','.css','.less','.vue','.vuex'],
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
        {loader:'ts-loader',options:{entryFileCannotBeJs:true}},
      ],
      exclude:[nodeModules],
    },{
      test: /\.(jpe?g|png|gif|psd|ico)/i,
      loader: 'file-loader?name=img/img_[hash:8].[ext]',
    },{
      test: /\.(ttf|eot|svg|woff|woff2|otf)/,
      loader: 'file-loader?name=font/[hash:8].[ext]',
    }, {
      test: /\.(pdf)/,
      loader: 'file-loader?name=pdf/[hash].[ext]',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file-loader?name=video/[hash].[ext]',
    }],
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
    new webpack.optimize.CommonsChunkPlugin({
      name:'commons',
      filename:'js/[name]_[hash:8].js',
      chunks:['commons','app'],
      // minChunks:Infinity,
    }),
  ],
};
