import React, {Component} from 'react';

import FilterHeader from '../Presentational/FilterHeader';

const App = ({match: {params}}) =>{
  return (
    <div>
      <FilterHeader />
    </div>
  )
}

export default App;