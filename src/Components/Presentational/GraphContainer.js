import React from 'react';

import BarGraph from '../Container/BarGraph/BarGraph';
import LineGraph from '../Container/LineGraph/LineGraph';
import PieChart from '../Container/PieChart/PieChart';

/*
 * This component reads what type of graph to display
 * from the URL and renders the matching graph.
 */
const GraphContainer = ({ windowWidth, windowHeight, type, data }) => {
	if (type === 'BAR_GRAPH') {
		return (
			<BarGraph x={windowWidth * 0.7} y={windowHeight * 0.6} data={data} />
		);
	} else if (type === 'LINE_GRAPH') {
		return <LineGraph x={windowWidth} y={windowHeight} />;
	} else {
		return <PieChart x={windowWidth} y={windowHeight} />;
	}
};

export default GraphContainer;
