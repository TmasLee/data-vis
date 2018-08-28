import React from 'react';
import {connect} from 'react-redux';

import GraphTypeNav from '../Presentational/GraphTypeNav';
import GraphContainer from '../Presentational/GraphContainer';

const App = ({match: {params}}) =>{
  return (
    <div>
      <GraphContainer type={params.type || 'BAR_GRAPH'}/>
      <GraphTypeNav />
    </div>
  )
}

export default connect((state,props)=>{
  return {
    
  }
})(App);