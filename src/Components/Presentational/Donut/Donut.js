import React, { Component } from 'react';
import { pie, arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import { select, selectAll, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

import Center from './Center';

// Get colors from data, add  to scaleOrdinal --> color changed based on data value
class PieChart extends Component {
	constructor(props) {
		super(props);
		const { x, y } = this.props;
		this.thickness = 200;
		this.radius = x < y ? x / 2 : y / 2;
		this.innerRadius = this.radius - this.thickness;
		this.centerPos = [x / 2, y / 2];
	}

	componentDidMount() {
		this.updateArcs(true);
	}

	componentDidUpdate(prevProps) {}

	updateArcs = initialRender => {
		const { x, y } = this.props;
		const { radius, innerRadius, centerPos, pieRef } = this;
		const color = scaleOrdinal().range(['blue', 'red', 'yellow', 'pink']);

		let pieData = pie()(
			sampleData.map(d => {
				return d.value;
			})
		);
		let arcData = arc()
			.outerRadius(radius)
			.innerRadius(innerRadius);
		if (initialRender) {
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
					console.log(d.data);
					return color(d.data);
				});
		} else {
			console.log('asdad');
		}
	};

	render() {
		const { x, y } = this.props;
		const { centerPos, innerRadius } = this;
		return (
			<g>
				<g ref={ref => (this.pieRef = ref)} />
				<Center centerPos={centerPos} radius={innerRadius} />
			</g>
		);
	}
}

export default PieChart;

let sampleData = [{ value: 25 }, { value: 20 }, { value: 40 }, { value: 30 }];
