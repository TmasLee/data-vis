import React from 'react';

import Bar from './Bar';
import ToolTipContainer from '../../Container/ToolTipContainer';

const BarGraph = ({ x, y, xScale, yScale, data, enableBtn }) => {
	const margin = 60;
	return (
		<svg width={x} height={y}>
			<g>
				{data.map((d, i) => (
					<Bar
						key={i}
						x={xScale(d.name)}
						y={yScale(d.power)}
						width={xScale.bandwidth()}
						height={y - yScale(d.power) - margin}
						color={d.color}
						rawData={d.power}
						enableBtn={enableBtn}
					/>
				))}
				<ToolTipContainer xScale={xScale} yScale={yScale} />
			</g>
		</svg>
	);
};

export default BarGraph;
