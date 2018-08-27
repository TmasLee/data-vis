import {combinereducers} from 'redux';
import app from './app';
import graphTypeNav from './graphTypeNav';

export default combinereducers({
  app: app,
  graphTypeNav: graphTypeNav
});