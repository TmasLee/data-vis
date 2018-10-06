import React, { Component } from 'react';
import { pie, arc } from 'd3-shape';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

import Center from './Center';

class PieChart extends Component {
	constructor(props) {
		super(props);
		const { x, y } = this.props;
		this.thickness = 40;
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
		if (initialRender) {
			select(this.pieRef)
				.append('path')
				.attr('transform', 'translate(' + x / 2 + ',' + y / 2 + ')')
				.attr(
					'd',
					pieData.map(slice => {
						return arc({
							innerRadius: this.radius - this.thickness,
							outerRadius: this.radius,
							startAngle: slice.startAngle,
							endAngle: slice.endAngle
						});
					})
				);
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
