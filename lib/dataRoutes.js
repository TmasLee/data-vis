import express from 'express';

import dataApi from './api/dataApi';
import holmiumTrial1 from './api/holmiumTrial1';
import holmiumTrial2 from './api/holmiumTrial2';
import KMnO4Trial1 from './api/KMnO41';
import KMnO4Trial2 from './api/KMnO42';
let dataRouter = express.Router();

// Route for data
dataRouter.get('/', (req, res) => {
	res.send({ data: dataApi.dataSet });
});

dataRouter.get('/holmiumTrial1', (req, res) => {
	res.send({ data: holmiumTrial1 });
});

dataRouter.get('/holmiumTrial2', (req, res) => {
	res.send({ data: holmiumTrial2 });
});

dataRouter.get('/KMnO4Trial1', (req, res) => {
	res.send({ data: KMnO4Trial1 });
});

dataRouter.get('/KMnO4Trial2', (req, res) => {
	res.send({ data: KMnO4Trial2 });
});

// Route to randomize data
dataRouter.put('/randomize', (req, res) => {
	dataApi.dataSet.map(person => {
		if (person.name === 'The Ancient One') {
			dataApi.calculateSimilarity(90, 80, person);
			dataApi.calculateColor(person);
		} else if (person.name === 'Mordo') {
			dataApi.calculateSimilarity(0, 30, person);
			dataApi.calculateColor(person);
		} else if (person.name === 'Dormammu') {
			dataApi.calculateSimilarity(90, 100, person);
			dataApi.calculateColor(person);
		} else {
			dataApi.calculateSimilarity(75, 10, person);
			dataApi.calculateColor(person);
		}
	});
	res.send({ data: dataApi.dataSet });
});

export default dataRouter;
