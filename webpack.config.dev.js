const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  devtool: 'inline-source-map',
  target: 'web',
  entry: ['babel-polyfill', './src/dom.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;