import React, { Component } from 'react';
import { axisBottom, axisRight } from 'd3-axis';
import { scaleBand, ScaleBand, scaleLinear, ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { Transition, transition as d3Transition } from 'd3-transition';

class Axes extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.drawAxes();
	}

	componentDidUpdate() {}

	getXScale = () => {
		this.xScale = scaleBand()
			.domain(sampleData.map(d => d.name))
			.rangeRound([0, 500])
			.padding(0.1);
		return this.xScale;
	};

	getYScale = () => {
		this.yScale = scaleBand()
			.domain(sampleData.map(d => d.sameness).sort((x1, x2) => x1 - x2))
			.rangeRound([500, 0])
			.padding(0.1);
		return this.yScale;
	};

	drawXAxis = () => {
		select(this.xAxisRef).call(axisBottom(this.getXScale()));
	};

	drawYAxis = initialDraw => {
		if (initialDraw) {
			select(this.yAxisRef).call(axisRight(this.getYScale()));
		} else {
			select(this.yAxisRef).call(axisRight(this.getYScale()));
		}
	};

	drawAxes = () => {
		this.drawXAxis();
		this.drawYAxis(true);
	};

	render() {
		const { x, y } = this.props;

		return (
			<svg width={x} height={y}>
				<g ref={ref => (this.xAxisRef = ref)} />
				<g ref={ref => (this.yAxisRef = ref)} />
			</svg>
		);
	}
}

export default Axes;

let sampleData = [
	{
		name: 'Peter',
		sameness: 75
	},
	{
		name: 'Antonio',
		sameness: 65
	},
	{
		name: 'Thomas',
		sameness: 70
	},
	{
		name: 'He who shall not be named',
		sameness: 100
	},
	{
		name: 'Umma',
		sameness: 20
	}
];
