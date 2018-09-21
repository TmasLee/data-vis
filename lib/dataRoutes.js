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
			dataApi.calculateSimilarity(100, 80, person);
			dataApi.calculateColor(person);
		} else if (person.name === 'Umma' || person.name === 'Dormammu') {
			return;
		} else {
			dataApi.calculateSimilarity(75, 10, person);
			dataApi.calculateColor(person);
		}
	});
	res.send({ data: dataApi.dataSet });
});

export default dataRouter;
