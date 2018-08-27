const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  devtool: 'source-map',
  target: 'web',
  entry: ['babel-polyfill', './src/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          minify: {},
          compress: {
            booleans: true
          }
        }
      })
    ]
  },  
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;