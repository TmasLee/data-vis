import React from 'react';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

const Center = ({ centerPos, radius }) => {
	return (
		<circle r={radius} cx={centerPos[0]} cy={centerPos[1]} fill={'cyan'} />
	);
};

export default Center;
