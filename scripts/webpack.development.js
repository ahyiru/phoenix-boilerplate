var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackConfig = require('./webpack.config');
process.env.NODE_ENV = 'development';
module.exports = merge(webpackConfig, {
  mode:'development',
  devtool: 'eval',
  // devtool: 'cheap-module-source-map',
  cache: true,
  bail: false,
  target: 'web',
  entry: {
    app: ['webpack-hot-middleware/client'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
