import React from 'react';

import DataPoint from './DataPoint';
import ToolTip from '../../Presentational/Tooltip';

/**
 * To Add:
 * - Btn to show raw data
 * - Tool tip
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
						x={xScale(d.Wavelength)}
						y={yScale(d.Intensity)}
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
