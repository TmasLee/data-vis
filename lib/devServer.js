import express from 'express';
import bodyParser from 'body-parser';

import dataRouter from './dataRoutes';
import env_config from './env_config';

const app = express();

app.use('/data', dataRouter);

app.use(bodyParser.json());

app.listen(env_config.port, function listenHandler() {
	console.info(`Running on ${env_config.port}`);
});
