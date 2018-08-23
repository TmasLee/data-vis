const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  devtool: 'inline-source-map',
  target: 'web',
  entry: ['babel-polyfill', './lib/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // noInfo: false,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Data Visuals',
      template: './lib/public/index.html',
      filename: './index.html'
    }),
    // new webpack.LoaderOptionsPlugin({
    //   debug: true
    // })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;