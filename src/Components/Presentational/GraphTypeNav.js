import React from 'react';
import GraphType from '../Container/GraphType';
import {VisibilityFilters} from '../../Actions';

// Change this into graph type selector

const GraphTypeNav = () => (
  <p>
    Show:
    {' '}
    <GraphType filter={VisibilityFilters.SHOW_ALL}>
      All
    </GraphType>
    {', '}
    <GraphType filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </GraphType>
    {', '}
    <GraphType filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </GraphType>
  </p>
);

export default GraphTypeNav;