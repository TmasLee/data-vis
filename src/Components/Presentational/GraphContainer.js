import React from 'react';

import Axes from './Axes';
import PieChart from '../Container/PieChart/PieChart';

/*
 * This reads graph type to display from the URL.
 */
const GraphContainer = ({
	windowWidth,
	windowHeight,
	type,
	data,
	lineData,
	appState,
	toggleToolTip,
	toggleToolTipOff
}) => {
	let graphWidth = windowWidth * 0.95;
	let graphHeight = windowHeight * 0.9;

	if (type === 'BAR_GRAPH' || 'LINE_GRAPH') {
		return (
			<Axes
				type={type}
				x={graphWidth}
				y={graphHeight}
				data={type === 'BAR_GRAPH' ? data : lineData}
				lineData={lineData}
				appState={appState}
				toggleToolTip={toggleToolTip}
				toggleToolTipOff={toggleToolTipOff}
			/>
		);
	} else {
		return <PieChart x={graphWidth} y={graphHeight} />;
	}
};

export default GraphContainer;
