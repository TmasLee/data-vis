import React from 'react';

import DataPoint from './DataPoint';
import ToolTipContainer from '../../Container/ToolTipContainer';

const LineGraph = ({ x, y, xScale, yScale, data, toolTipOn, toolTipOff }) => {
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
				<ToolTipContainer xScale={xScale} yScale={yScale} />
			</g>
		</svg>
	);
};

export default LineGraph;
