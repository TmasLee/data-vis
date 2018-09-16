import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';

import dataRouter from './dataRoutes';
import env_config from './env_config';
import config from '../webpack.config';

const app = express();
// const compiler = webpack(config);

// app.use(
// 	require('webpack-dev-middleware')(compiler, {
// 		noInfo: true,
// 		debug: true,
// 		open: true
// 	})
// );

app.use('/data', dataRouter);

app.use(bodyParser.json());

app.listen(env_config.port, function listenHandler() {
	console.info(`Running on ${env_config.port}`);
});
