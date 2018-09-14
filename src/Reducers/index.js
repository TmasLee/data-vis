import { combineReducers } from 'redux';
import app from './app';
import graphTypeSelector from './graphTypeSelector';

export default combineReducers({
	app: app,
	graphTypeSelector: graphTypeSelector
});
