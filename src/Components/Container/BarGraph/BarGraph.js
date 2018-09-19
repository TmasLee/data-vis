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
		this.drawXAxis();
		this.drawYAxis(true);
	}

	componentDidUpdate() {}

	getXScale = () => {
		const { data } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([0, this.props.x - this.margin])
			.padding(0.1);
		return this.xScale;
	};

	getYScale = () => {
		const { data } = this.props;
		this.yScale = scaleLinear()
			.domain([0, Math.max(...data.map(d => d.sameness))])
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

	render() {
		const { x, y, data } = this.props;
		const xScale = this.getXScale();
		const yScale = this.getYScale();

		return (
			<svg width={x} height={y}>
				<g>
					<g ref={ref => (this.xAxisRef = ref)} />
					<g ref={ref => (this.yAxisRef = ref)} />
					{data.map((d, i) => (
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
