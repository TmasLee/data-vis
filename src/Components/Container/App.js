import React from 'react';

import GraphTypeNav from '../Presentational/GraphTypeNav';
import GraphContainer from '../Presentational/GraphContainer';

const App = ({match: {params}}) =>{
  return (
    <div>
      <GraphContainer />
      <GraphTypeNav />
    </div>
  )
}

export default App;