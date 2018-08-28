import {combineReducers} from 'redux';
import app from './app';
import graphTypeNav from './graphTypeNav';

export default combineReducers({
  app: app,
  graphTypeNav: graphTypeNav
});