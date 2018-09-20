import express from 'express';

import dataApi from './api/dataApi';

let dataRouter = express.Router();

// Route for data
dataRouter.get('/', (req, res) => {
	res.send({ data: dataApi.dataSet });
});

// Route to randomize data
dataRouter.put('/randomize', (req, res) => {
	dataApi.dataSet.map(person => {
		if (person.name === 'Peter') {
			person.sameness = Math.floor(Math.random() * 101 - 95);
		} else {
			person.sameness = Math.floor(Math.random() * 101 - 10);
		}
	});
	// dataApi.data;
	res.send({});
});

export default dataRouter;
