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
			<BarGraph x={windowWidth * 0.7} y={windowHeight * 0.7} data={data} />
		);
	} else if (type === 'LINE_GRAPH') {
		return <LineGraph x={x} y={y} />;
	} else {
		return <PieChart />;
	}
};

export default GraphContainer;
