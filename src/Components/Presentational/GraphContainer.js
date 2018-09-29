import React from 'react';

import Axes from './Axes';
import PieChart from './PieChart/PieChart';

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
	enableBtn,
	toggleToolTip,
	toggleToolTipOff
}) => {
	let graphWidth = windowWidth * 0.95;
	let graphHeight = windowHeight * 0.85;

	if (type === 'BAR_GRAPH' || 'LINE_GRAPH') {
		return (
			<Axes
				type={type}
				x={graphWidth}
				y={graphHeight}
				data={type === 'BAR_GRAPH' ? data : lineData}
				lineData={lineData}
				appState={appState}
				enableBtn={enableBtn}
				toggleToolTip={toggleToolTip}
				toggleToolTipOff={toggleToolTipOff}
			/>
		);
	} else {
		return <PieChart x={graphWidth} y={graphHeight} />;
	}
};

export default GraphContainer;
