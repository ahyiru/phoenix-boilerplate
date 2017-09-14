var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = require('./webpack.config');

// process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  cache: false,
  entry: {
    commons:['react','react-dom'],
  },
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
    new webpack.optimize.CommonsChunkPlugin({ //合并公共代码
      name:'commons',
      filename:'js/[name]_[hash:8].js',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ],
});
