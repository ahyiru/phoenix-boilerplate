var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  cache: false,
  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:'css-loader',
      }),
      // exclude: /components/,
    },{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:['css-loader','less-loader'],
        // publicPath:'',
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename:'[name]_[contenthash].css',
      allChunks: true,
      disable:false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ],
});
