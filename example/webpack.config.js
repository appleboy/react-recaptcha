import webpack from 'webpack';
const port = process.env.PORT || 3000;

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: 'eval',

  // Set entry point to ./example/main and include necessary files for hot load
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './example/main',
  ],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: `${__dirname}/build/`,
    filename: 'app.js',
    publicPath: `http://localhost:${port}/build/`,
  },

  // Necessary plugins for hot load
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  port,
};
