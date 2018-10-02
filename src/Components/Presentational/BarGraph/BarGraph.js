import React from 'react';

import Bar from './Bar';
import ToolTipContainer from '../../Container/ToolTipContainer';

const BarGraph = ({
	x,
	y,
	xScale,
	yScale,
	data,
	type,
	enableBtn,
	toolTipOn,
	toolTipOff
}) => {
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
						toolTipOn={toolTipOn}
						toolTipOff={toolTipOff}
					/>
				))}
				<ToolTipContainer xScale={xScale} yScale={yScale} type={type} />
			</g>
		</svg>
	);
};

export default BarGraph;
