import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../Components/Presentational/App';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route path="/:type?" component={App} />
		</Router>
	</Provider>
);

export default Root;
