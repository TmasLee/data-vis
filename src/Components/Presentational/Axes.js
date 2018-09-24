import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

import BarGraph from '../Container/BarGraph/BarGraph';
import LineGraph from '../Container/LineGraph/LineGraph';

class Axes extends Component {
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

	// based on type
	componentDidMount() {
		this.drawBarXAxis();
		this.drawYAxis();
	}
	// based on type
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.data !== this.props.data) {
			this.drawBarXAxis();
			this.drawYAxis();
		}
		if (prevProps.x !== this.props.x || prevProps.y !== this.props.y) {
			this.getBarXScale();
			this.getYScale();
			this.drawBarXAxis();
			this.drawYAxis();
		}
	}

	getBarXScale = () => {
		const { data } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([0, this.props.x - this.state.margin])
			.padding(0.1);
		return this.xScale;
	};

	drawBarXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' +
					this.state.margin +
					',' +
					(this.props.y - this.state.margin) +
					')'
			)
			.call(axisBottom(this.getBarXScale()));
	};

	getLineXScale = () => {
		const { data } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([0, this.props.x - this.state.margin])
			.padding(0.1);
		return this.xScale;
	};

	drawLineXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' +
					this.state.margin +
					',' +
					(this.props.y - this.state.margin) +
					')'
			)
			.call(axisBottom(this.getLineXScale()));
	};

	// Make y axis zoomable for bar and line
	getYScale = () => {
		this.yScale = scaleLinear()
			.domain([0, 110])
			.rangeRound([this.props.y - this.state.margin, this.state.margin]);
		return this.yScale;
	};

	drawYAxis = () => {
		select(this.yAxisRef)
			.attr('transform', 'translate(' + this.state.margin + ',0)')
			.call(axisLeft(this.getYScale()));
	};

	render() {
		const { x, y, data, type } = this.props;
		const xScale =
			type === 'BAR_GRAPH' ? this.getBarXScale() : this.getLineXScale();
		const yScale = this.getYScale();
		const graph =
			type === 'BAR_GRAPH' ? (
				<BarGraph x={x} y={y} xScale={xScale} yScale={yScale} data={data} />
			) : (
				<LineGraph x={x} y={y} xScale={xScale} yScale={yScale} data={data} />
			);
		return (
			<svg width={x} height={y}>
				<g ref={ref => (this.xAxisRef = ref)} />
				<g ref={ref => (this.yAxisRef = ref)} />
				{graph}
			</svg>
		);
	}
}

export default Axes;
