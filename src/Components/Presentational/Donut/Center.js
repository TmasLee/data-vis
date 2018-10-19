import React from 'react';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

const Center = ({ centerPos, radius, data }) => {
	return (
		<g>
			<circle r={radius} cx={centerPos[0]} cy={centerPos[1]} fill={'cyan'} />
			<text textAnchor="middle" x={centerPos[0]} y={centerPos[1]}>
				{data.value}
			</text>
		</g>
	);
};

export default Center;
