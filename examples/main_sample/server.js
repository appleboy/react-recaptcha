const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path = require('path');

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'build'),
  publicPath: `${config.output.publicPath}`,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    cached: false,
    cachedAssets: false,
  },
}).listen(config.port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at 0.0.0.0: ${config.port}`);
});
