import React from 'react';
import ReactDOM from 'react-dom';

import store from './src/store';
import Root from './src/Components/Root';

ReactDOM.render(
  <Root store = {store}/>,
  document.getElementById('root')
);