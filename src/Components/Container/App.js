import React from 'react';
import {connect} from 'react-redux';

import GraphTypeSelector from '../Presentational/GraphTypeSelector';
import GraphContainer from '../Presentational/GraphContainer';

const style = {
  
}

const App = ({match: {params}}) =>{
  return (
    <div>
      <GraphContainer type={params.type || 'BAR_GRAPH'}/>
      <GraphTypeSelector />
    </div>
  )
}

export default connect((state,props)=>{
  return {
    
  }
})(App);