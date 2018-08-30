import React from 'react';
import connect from 'react-redux';

import Axes from './Axes';

const style = {
  
}

// For reading from URL 
const GraphContainer = ({type: {type}}) => {
  return (
    // For now set width/height to 100%
    // Consider mobile + desktop 
    <svg width='100%' height='100%'>
      
    </svg>
  )
}

export default GraphContainer;