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
			person.sameness = Math.floor(Math.random() * (100 - 95 + 1) + 95);
		} else if (person.name === 'Umma') {
			person.sameness = Math.floor(Math.random() * (100 - 50 + 1));
		} else if (person.name === 'He who shall not be named') {
			person.sameness = Math.floor(Math.random() * (100 - 97 + 1) + 97);
		} else {
			person.sameness = Math.floor(Math.random() * (100 - 10 + 1) + 10);
		}
	});
	res.send({ data: dataApi.dataSet });
});

export default dataRouter;
