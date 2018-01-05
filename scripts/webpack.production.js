var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  cache: false,
  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:[{
          loader:'css-loader',
          options:{
            minimize:true,
          },
        }],
      }),
    },{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:[{
          loader:'css-loader',
          options:{
            minimize:true,
          },
        },{
          loader:'less-loader',
        }],
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename:'css/[name]_[contenthash:8].css',
      allChunks: true,
      disable:false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
      sourceMap:true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
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
