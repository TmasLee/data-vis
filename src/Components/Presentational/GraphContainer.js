import React from 'react';

import BarGraph from '../Container/BarGraph/BarGraph';
import LineGraph from '../Container/LineGraph/LineGraph';
import PieChart from '../Container/PieChart/PieChart';

const style = {
	border: '1px solid black'
};

/*
 * This component reads what type of graph to display
 * from the URL and renders the matching graph.
 */
const GraphContainer = ({ x, y, type }) => {
	if (type === 'BAR_GRAPH') {
		return <BarGraph x={x} y={y} />;
	} else if (type === 'LINE_GRAPH') {
		return <LineGraph x={x} y={y} />;
	} else {
		return <PieChart />;
	}
};

export default GraphContainer;
