import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

config.output.publicPath = '/assets/';

var server = new WebpackDevServer(webpack(config), {
  publicPath         : config.output.publicPath,
  hot                : true,
  historyApiFallback : true
});

export default server;
