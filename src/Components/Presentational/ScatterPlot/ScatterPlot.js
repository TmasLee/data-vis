import React from 'react';

import DataPoint from './DataPoint';
import ToolTipContainer from '../../Container/ToolTipContainer';

const ScatterPlot = ({
	x,
	y,
	xScale,
	yScale,
	type,
	data,
	toolTipOn,
	toolTipOff
}) => {
	return (
		<svg width={x} height={y}>
			<g>
				{data.map((d, i) => (
					<DataPoint
						key={i}
						x={xScale(d.Wavelength)}
						y={yScale(d.Intensity)}
						data={[d.Wavelength, d.Intensity]}
						toolTipOn={toolTipOn}
						toolTipOff={toolTipOff}
					/>
				))}
				<ToolTipContainer xScale={xScale} yScale={yScale} type={type} />
			</g>
		</svg>
	);
};

export default ScatterPlot;
