'use strict';

var webpack = require('webpack');
var path = require('path');
var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devTool: 'sourcemap',
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'client.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          ReactStylePlugin.loader(),
          'jsx-loader?harmony&sourceMap'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
    new ReactStylePlugin('bundle.css', {allChunks: true})
  ]
};
