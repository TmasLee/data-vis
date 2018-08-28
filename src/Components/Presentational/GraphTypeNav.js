import React from 'react';
import Type from '../Container/Type';
import {GraphType} from '../../Actions';

// Change this into graph type selector

const GraphTypeNav = () => (
  <p>
    Display:
    {' '}
    <Type type={GraphType.BAR_GRAPH}>
      Bar
    </Type>
    {', '}
    <Type type={GraphType.LINE_GRAPH}>
      Line
    </Type>
    {', '}
    <Type type={GraphType.PIE_CHART}>
      Pie
    </Type>
  </p>
);

export default GraphTypeNav;