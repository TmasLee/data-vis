import React from 'react';

import DataPoint from './DataPoint';
import ToolTip from '../../Presentational/Tooltip';

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
			<g>
				{data.map((d, i) => (
					<DataPoint
						key={i}
						x={xScale(d.power)}
						y={yScale(d.power)}
						data={d}
						toggleToolTip={toggleToolTip}
						toggleToolTipOff={toggleToolTipOff}
					/>
				))}
			</g>
		</svg>
	);
};

export default LineGraph;
