import { combineReducers } from 'redux';
import app from './app';
import menu from './menu';
import tooltip from './tooltip';

export default combineReducers({
	app: app,
	menu: menu,
	tooltip: tooltip
});
