import React, {Component} from 'react';
import {connect} from 'react-redux';

import GraphTypeSelector from '../Presentational/GraphTypeSelector';
import GraphContainer from '../Presentational/GraphContainer';

const style = {

}

class App extends Component {

  render(){
    const {type, containerSize} = this.props;

    return (
      <div>
        <GraphContainer 
          type={type || 'BAR_GRAPH'}
          {...containerSize}
          />
        <GraphTypeSelector />
      </div>
    )
  }
}

export default connect((state,props)=>{
  return {
    containerSize: state.app.containerSize,
    graphType: state.app.graphType,
    showGridLines: state.app.showGridLines,
    data: state.app.data,

  }
})(App);