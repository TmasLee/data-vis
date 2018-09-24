import React from 'react';

import Axes from './Axes';
import PieChart from '../Container/PieChart/PieChart';

/*
 * This reads graph type to display from the URL.
 */
const GraphContainer = ({ windowWidth, windowHeight, type, data }) => {
	let graphWidth = windowWidth * 0.7;
	let graphHeight = windowHeight * 0.6;

	if (type === 'BAR_GRAPH' || 'LINE_GRAPH') {
		return <Axes type={type} x={graphWidth} y={graphHeight} data={data} />;
	} else {
		return <PieChart x={graphWidth} y={graphHeight} />;
	}
};

export default GraphContainer;
