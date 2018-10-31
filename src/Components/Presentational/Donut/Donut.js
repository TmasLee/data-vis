import React, { Component } from 'react';
import { pie, arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import { select, selectAll, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

import Center from './Center';

// Transitions
class PieChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			centerData: [],
			centerColor: 'cyan'
		};
		const { x, y } = this.props;
		this.thickness = 250;
		this.radius = x < y ? x / 2.5 : y / 2.5;
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
		const color = scaleOrdinal().range([
			'#2C93E8',
			'#838690',
			'#F56C4E',
			'#74c16e'
		]);

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
			.attr('fill', d => {
				return color(d.data);
			})
			.on('mouseover', d => {
				let sliceColor = color(d.data);
				this.setState({ centerColor: sliceColor });
				this.setState({ centerData: d });
			});
	};

	render() {
		const { centerPos, innerRadius } = this;
		const { centerColor, centerData } = this.state;
		return (
			<g>
				<g ref={ref => (this.pieRef = ref)} />
				<Center
					centerPos={centerPos}
					radius={innerRadius}
					data={centerData}
					color={centerColor}
				/>
			</g>
		);
	}
}

export default PieChart;
