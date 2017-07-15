var webpack = require('webpack');
var merge = require('@ersinfotech/merge');

var webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'eval',
  // devtool: 'cheap-module-source-map',
  cache: true,
  bail: false,
  target: 'web',
  // debug: true, //😢!!!
  entry: {
    app: ['webpack-hot-middleware/client'],
    login: ['webpack-hot-middleware/client'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      // exclude: [/node_modules/],
    },{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(/*{multiStep: true}*/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
});
