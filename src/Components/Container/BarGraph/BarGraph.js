import React from 'react';

import Bar from './Bar';
import Tooltip from '../../Presentational/Tooltip';

const BarGraph = ({
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
					<Bar
						key={i}
						x={xScale(d.name) + margin}
						y={yScale(d.power)}
						width={xScale.bandwidth()}
						height={y - yScale(d.power) - margin}
						color={d.color}
						rawData={d.power}
						toggleToolTip={toggleToolTip}
						toggleToolTipOff={toggleToolTipOff}
					/>
				))}
				<Tooltip
					x={toolTipX}
					y={toolTipY}
					visibility={visibility}
					data={toolTipText}
					centerOffSet={0}
					halfBarWidth={59.5}
				/>
			</g>
		</svg>
	);
};

export default BarGraph;
