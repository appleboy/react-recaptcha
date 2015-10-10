var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: './src/index',

  output: {
    library: 'ReactRecaptcha',
    libraryTarget: 'umd',
    path: __dirname + '/dist/',
    filename: 'react-recaptcha.js'
  },

  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
