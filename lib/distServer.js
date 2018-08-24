import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import router from './routes';
import env_config from './env_config';

const app = express();

app.use(compression());
app.use(express.static('public'));
app.use(router);
app.use(bodyParser.json());

app.listen(env_config.port, function listenHandler(){
  console.info(`Running on ${env_config.port}`);
})