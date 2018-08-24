import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';

import router from './routes';
import env_config from './env_config';
import config from '../webpack.config.dev';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  debug: true
}));

app.use(router);

app.use(bodyParser.json());

app.listen(env_config.port, function listenHandler(){
  console.info(`Running on ${env_config.port}`);
})