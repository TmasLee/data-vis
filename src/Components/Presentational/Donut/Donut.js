import React, { Component } from 'react';
import { pie, arc } from 'd3-shape';
import { select, selectAll, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

import Center from './Center';

class PieChart extends Component {
	constructor(props) {
		super(props);
		const { x, y } = this.props;
		this.thickness = 160;
		this.radius = x < y ? x / 2 : y / 2;
	}

	componentDidMount() {
		this.updateArcs(true);
	}

	componentDidUpdate(prevProps) {}

	updateArcs = initialRender => {
		const { x, y } = this.props;
		let pieData = pie()(
			sampleData.map(d => {
				return d.value;
			})
		);
		let arcData = arc()
			.outerRadius(this.radius)
			.innerRadius(this.radius - this.thickness);
		if (initialRender) {
			let pieGraph = select(this.pieRef).attr(
				'transform',
				'translate(' + x / 2 + ',' + y / 2 + ')'
			);
			let g = pieGraph
				.selectAll('.arc')
				.data(pieData)
				.enter()
				.append('g')
				.attr('class', 'arc');
			g.append('path')
				.attr('d', arcData)
				.attr('fill', 'red');
		} else {
			console.log('asdad');
		}
	};

	render() {
		const { x, y } = this.props;
		return (
			<g>
				<g ref={ref => (this.pieRef = ref)} />
				<Center />
			</g>
		);
	}
}

export default PieChart;

let sampleData = [{ value: 25 }, { value: 25 }, { value: 25 }, { value: 25 }];
