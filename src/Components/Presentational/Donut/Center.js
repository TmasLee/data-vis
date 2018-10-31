import React from 'react';

const Center = ({ centerPos, radius, data, color }) => {
	return (
		<g>
			<circle
				r={radius}
				cx={centerPos[0]}
				cy={centerPos[1]}
				fill={color}
				stroke="black"
				strokeWidth="1"
			/>
			<text textAnchor="middle" x={centerPos[0]} y={centerPos[1] + 6}>
				Value:
				{data.value}
			</text>
		</g>
	);
};

export default Center;
