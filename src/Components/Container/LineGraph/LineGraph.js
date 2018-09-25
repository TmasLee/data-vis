import React from 'react';

/**
 * To Add:
 * - Btn to show raw data
 * - Dropdown to select trial to graph
 *
 * To Think About:
 * - Big data set, how to store data.
 * - Make new apis for data for each graph?
 *    - New actions to fetch appropriate url
 */

const LineGraph = ({
	x,
	y,
	xScale,
	yScale,
	data,
	toolTipX,
	toolTipY,
	visibility,
	toolTipText,
	toggleToolTip,
	toggleToolTipOff
}) => {
	const margin = 25;
	return (
		<svg width={x} height={y}>
			<g ref={ref => (this.xAxisRef = ref)} />
			<g ref={ref => (this.yAxisRef = ref)} />
		</svg>
	);
};

export default LineGraph;
