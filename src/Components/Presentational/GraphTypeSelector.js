import React from 'react';

import Type from './Type';
import { GraphType } from '../../Actions';

const GraphTypeSelector = () => (
	<div>
		Display:
		<Type type={GraphType.BAR_GRAPH}>Bar</Type>
		{', '}
		<Type type={GraphType.SCATTER_PLOT}>Scatter</Type>
		{', '}
		<Type type={GraphType.DONUT_CHART}>Donut</Type>
	</div>
);

export default GraphTypeSelector;
