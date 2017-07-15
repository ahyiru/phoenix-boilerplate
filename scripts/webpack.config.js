var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const appName=require('../package').name;
const src = path.resolve(process.cwd(), '.');
const app = path.resolve(src,'app');
const nodeModules = path.resolve(process.cwd(), 'node_modules');

module.exports = {
  context: src,
  entry: {
    app: [ path.resolve(app, 'index.js')]
  },
  output: {
    path: path.resolve(src, '_dist'),
    filename: '[name]_[hash:8].js',
    libraryTarget:'umd',
  },
  resolve: {
    modules: [
      app,
      nodeModules,
    ],
    extensions: ['.js','.jsx','.ts','.tsx','.json','.css','.less'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader:'babel-loader',
      exclude: [nodeModules],
      // include: ['node'],// Where to look for *.js and *.jsx
    }, {
      test: /\.tsx?$/,
      use:['babel-loader','ts-loader'],
      exclude: [nodeModules],
    },{
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file-loader?name=img/img_[hash:8].[ext]',
    },{
      test: /\.(ttf|eot|svg|woff|woff2)/,
      loader: 'file-loader?name=font/[hash].[ext]',
    }, {
      test: /\.(pdf)/,
      loader: 'file-loader?name=pdf/[hash].[ext]',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file-loader',
    }, {
      test: /\.huy/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:appName,
      template: path.resolve(src, 'public/index.html'),
      favicon: path.resolve(src, 'public/favicon.ico'),
      inject: false,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      // debug: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
