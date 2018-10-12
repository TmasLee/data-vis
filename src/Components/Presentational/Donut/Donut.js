import React, { Component } from 'react';
import { pie, arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import { select, selectAll, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

import Center from './Center';

// Get colors from data, add to scaleOrdinal
// Transitions
// Fill in info for donut
// Center defaults to legend?
class PieChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			centerData: []
		};
		const { x, y } = this.props;
		this.thickness = 250;
		this.radius = x < y ? x / 2 : y / 2;
		this.innerRadius = this.radius - this.thickness;
		this.centerPos = [x / 2, y / 2];
	}

	componentDidMount() {
		this.updateArcs();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			this.updateArcs();
		}
	}

	updateArcs = () => {
		const { data } = this.props;
		const { radius, innerRadius, centerPos, pieRef } = this;
		const color = scaleOrdinal().range(['blue', 'red', 'yellow', 'pink']);
		console.log(data);
		let pieData = pie()(
			data.map(d => {
				return d.value;
			})
		);
		let arcData = arc()
			.outerRadius(radius)
			.innerRadius(innerRadius);
		let pieGraph = select(pieRef).attr(
			'transform',
			'translate(' + centerPos[0] + ',' + centerPos[1] + ')'
		);
		let g = pieGraph
			.selectAll('.arc')
			.data(pieData)
			.enter()
			.append('g')
			.attr('class', 'arc');
		g.append('path')
			.attr('d', arcData)
			.attr('fill', function(d) {
				return color(d.data);
			})
			.on('mouseover', d => {
				console.log(d);
				this.setState({ centerData: d });
			});
	};

	render() {
		const { centerPos, innerRadius } = this;
		return (
			<g>
				<g ref={ref => (this.pieRef = ref)} />
				<Center
					centerPos={centerPos}
					radius={innerRadius}
					data={this.state.centerData}
				/>
			</g>
		);
	}
}

export default PieChart;
