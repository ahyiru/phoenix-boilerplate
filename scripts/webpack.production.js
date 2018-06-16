var webpack = require('webpack');
var merge = require('webpack-merge');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';
var rootDir=require('../configs').PRD_ROOT_DIR;

module.exports = merge(webpackConfig, {
  mode:'production',
  devtool: 'cheap-module-source-map',
  cache: false,
  output:{
    publicPath:rootDir,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use:[{
        loader:MiniCssExtractPlugin.loader,
        options:{
          publicPath: '../',
        },
      },{
          loader:'css-loader',
          options:{
            minimize:true,
          },
        },
      ],
    },{
      test: /\.less$/,
      use:[{
        loader:MiniCssExtractPlugin.loader,
        options:{
          publicPath: '../',
        },
      },{
          loader:'css-loader',
          options:{
            minimize:true,
          },
        },{
          loader:'less-loader',
        },
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'css/[name]_[contenthash:8].css',
      chunkFilename:'css/[id]_[name]_[contenthash:8].css',
      publicPath:'../',
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      cacheId: 'demo',
      filename: 'service-worker.js',
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/,/\.huy$/,/\.html$/, /asset-manifest\.json$/],
    }),
  ],
});
