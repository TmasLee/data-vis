import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { Transition, transition as d3Transition } from 'd3-transition';

import Bar from './Bar';

class BarGraph extends Component {
	constructor(props) {
		super(props);

		this.margin = 25;
	}

	componentDidMount() {
		this.drawAxes();
	}

	componentDidUpdate() {}

	getXScale = () => {
		this.xScale = scaleBand()
			.domain(sampleData.map(d => d.name))
			.rangeRound([0, this.props.x - this.margin])
			.padding(0.1);
		return this.xScale;
	};

	getYScale = () => {
		this.yScale = scaleLinear()
			.domain([0, Math.max(...sampleData.map(d => d.sameness))])
			.rangeRound([this.props.y - this.margin, this.margin]);
		return this.yScale;
	};

	drawXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' + this.margin + ',' + (this.props.y - this.margin) + ')'
			)
			.call(axisBottom(this.getXScale()));
	};

	drawYAxis = initialDraw => {
		if (initialDraw) {
			select(this.yAxisRef)
				.attr('transform', 'translate(' + this.margin + ',0)')
				.call(axisLeft(this.getYScale()));
		} else {
			// select(this.yAxisRef)
			// 	.attr('transform', 'translate(0,' + (this.props.x + this.margin) + ')')
			// 	.call(axisLeft(this.getYScale()));
		}
	};

	drawAxes = () => {
		this.drawXAxis();
		this.drawYAxis(true);
	};

	render() {
		const { x, y } = this.props;
		const xScale = this.getXScale();
		const yScale = this.getYScale();

		return (
			<svg width={x} height={y}>
				<g>
					<g ref={ref => (this.xAxisRef = ref)} />
					<g ref={ref => (this.yAxisRef = ref)} />
					{sampleData.map((d, i) => (
						<Bar
							key={i}
							x={xScale(d.name) + this.margin}
							y={yScale(d.sameness)}
							width={xScale.bandwidth()}
							height={y - yScale(d.sameness) - this.margin}
							color={d.color}
						/>
					))}
				</g>
			</svg>
		);
	}
}

export default BarGraph;

let sampleData = [
	{
		name: 'Peter',
		sameness: 85,
		color: 'green'
	},
	{
		name: 'Antonio',
		sameness: 65,
		color: 'orange'
	},
	{
		name: 'Thomas',
		sameness: 70,
		color: 'red'
	},
	{
		name: 'He who shall not be named',
		sameness: 100,
		color: 'green'
	},
	{
		name: 'Umma',
		sameness: 20,
		color: 'purple'
	}
];
