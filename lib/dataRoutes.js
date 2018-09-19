import express from 'express';

import dataApi from './api/dataApi';

let dataRouter = express.Router();

// Route for data
dataRouter.get('/', (req, res) => {
	res.send({ data: dataApi.dataSet });
});

// Route to randomize data
dataRouter.get('/randomize', (req, res) => {
	let newData = [Math.floor(Math.random() * (10 - 1))];
	res.send({ data: (dataApi.data = newData) });
});

export default dataRouter;
