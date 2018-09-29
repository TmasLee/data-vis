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
	enableBtn,
	toggleToolTip,
	toggleToolTipOff,
	toolTipWidth
}) => {
	const margin = 60;
	const halfBarWidth = xScale.bandwidth() / 2;
	const centerOffSet = (xScale.bandwidth() - toolTipWidth) / 2;
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
						toggleToolTip={toggleToolTip}
						toggleToolTipOff={toggleToolTipOff}
					/>
				))}
				<Tooltip
					x={toolTipX}
					y={toolTipY}
					visibility={visibility}
					data={toolTipText}
					centerOffSet={centerOffSet}
					halfBarWidth={halfBarWidth}
					width={toolTipWidth}
				/>
			</g>
		</svg>
	);
};

export default BarGraph;
