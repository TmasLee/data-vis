import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

/**
 * To Add:
 * - Btn to show raw data
 * - Dropdown to select trial to graph/maybe lab report itself too?
 * - Zoomable (with scroll?) axes
 * -
 *
 * To Think About:
 * - Make new apis for data for each graph?
 *    - New actions to fetch appropriate url
 *    - Big data set, how to store data.
 * -
 */

class LineGraph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			margin: 25,
			visibility: 'hidden',
			toolTipX: 0,
			toolTipY: 0,
			toolTipText: ''
		};
	}

	render() {
		const { x, y, xScale, yScale, data } = this.props;
		const { margin, toolTipX, toolTipY, visibility, toolTipText } = this.state;
		return (
			<svg width={x} height={y}>
				<g ref={ref => (this.xAxisRef = ref)} />
				<g ref={ref => (this.yAxisRef = ref)} />
			</svg>
		);
	}
}

export default LineGraph;
