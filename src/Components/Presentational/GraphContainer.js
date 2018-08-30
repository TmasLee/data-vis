import React from 'react';
import connect from 'react-redux';

import Axes from './Axes';

const style = {
  border: '1px solid black',

}

// For reading from URL 
const GraphContainer = props => {
  const {x,y} = props;
  return (
    // Consider mobile + desktop 
    <svg width={x} height={y} style={style}>
      
    </svg>
  )
}

export default GraphContainer;