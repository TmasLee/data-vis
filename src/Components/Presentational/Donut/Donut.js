import React, { Component } from 'react';
import { pie, arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import { select, selectAll, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

import Center from './Center';

class DonutChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			centerData: [],
			centerColor: 'cyan'
		};
		const { x, y } = this.props;
		this.radius = Math.min(x, y) / 2.5;
		this.thickness = this.radius / 3;
		this.innerRadius = this.radius - this.thickness;
		this.centerPos = [x / 2, y / 2];
	}

	componentDidMount() {
		this.updateArcs();
	}

	componentDidUpdate(prevProps) {
		const { x, y } = this.props;
		this.radius = Math.min(x, y) / 2.5;
		this.thickness = this.radius / 3;
		this.innerRadius = this.radius - this.thickness;
		this.centerPos = [x / 2, y / 2];
		if (
			prevProps.x !== this.props.x ||
			prevProps.y !== this.props.y ||
			prevProps.data !== this.props.data
		) {
			this.updateArcs();
		}
	}

	updateArcs = () => {
		const { radius, innerRadius, centerPos, pieRef } = this;
		const color = scaleOrdinal().range([
			'#2C93E8',
			'#838690',
			'#F56C4E',
			'#74c16e'
		]);
		let pieData = pie()(
			this.props.data.map(d => {
				return d.value;
			})
		);
		let arcData = arc()
			.innerRadius(innerRadius)
			.outerRadius(radius);
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
				console.log(d);
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

export default DonutChart;
