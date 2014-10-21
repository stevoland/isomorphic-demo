'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devTool: 'sourcemap',
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'client.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loader: 'jsx-loader?harmony&sourceMap' }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
  ]
};
