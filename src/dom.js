import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import Root from './Components/Root';
import '../scss/styles.scss';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
