import React from 'react';

import Type from '../Container/Type';
import { GraphType } from '../../Actions';

const GraphTypeSelector = () => (
	<p>
		Display: <Type type={GraphType.BAR_GRAPH}>Bar</Type>
		{', '}
		<Type type={GraphType.LINE_GRAPH}>Line</Type>
		{', '}
		<Type type={GraphType.PIE_CHART}>Pie</Type>
		{', '}
		<Type>ph_comparative</Type>
		{', '}
		<Type>ph_vr</Type>
	</p>
);

export default GraphTypeSelector;
