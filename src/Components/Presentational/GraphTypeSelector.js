import React from 'react';

import Type from '../Container/Type';
import { GraphType } from '../../Actions';

const GraphTypeSelector = () => (
	<p>
		Display:
		<Type type={GraphType.BAR_GRAPH}>Bar</Type>
		{', '}
		<Type type={GraphType.LINE_GRAPH}>Scatter</Type>
		{', '}
		<Type type={GraphType.PIE_CHART}>Pie</Type>
	</p>
);

export default GraphTypeSelector;
