import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import env_config from './env_config';
import config from '../webpack.config.dev';
import webpack from 'webpack';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.path,
  debug: true
}));

app.use('/*',(req,res)=>{
  res.sendFiles(path.join(__dirname, 'index.html'))
});

app.use(bodyParser.json());

app.listen(env_config.port, function listenHandler(){
  console.info(`Running on ${env_config.port}`);
})