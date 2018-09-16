import express from 'express';
import path from 'path';

let dataRouter = express.Router();

// Test response
dataRouter.use('/*', (req, res) => {
	res.send({
		name: 'thomas'
	});
});

dataRouter.get('/randomize', (req, res) => {
	res.send('so random xD');
});

export default dataRouter;
