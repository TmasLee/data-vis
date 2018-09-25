import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

import BarGraph from '../Container/BarGraph/BarGraph';
import LineGraph from '../Container/LineGraph/LineGraph';

class Axes extends Component {
	constructor() {
		super();
		this.margin = 25;
	}

	componentDidMount() {
		const { type } = this.props;
		if (type === 'BAR_GRAPH') {
			this.drawBarXAxis();
		} else {
			this.drawLineXAxis();
		}
		this.drawYAxis();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.type === 'BAR_GRAPH') {
			this.drawBarXAxis();
		}
		if (this.props.type === 'LINE_GRAPH') {
			this.drawLineXAxis();
		}

		//  Resizes graph on window resize
		if (prevProps.x !== this.props.x || prevProps.y !== this.props.y) {
			this.drawBarXAxis();
			this.drawYAxis();
		}

		this.drawYAxis();
	}

	getBarXScale = () => {
		const { data } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([0, this.props.x - this.margin])
			.padding(0.1);
		return this.xScale;
	};

	drawBarXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' + this.margin + ',' + (this.props.y - this.margin) + ')'
			)
			.call(axisBottom(this.getBarXScale()));
	};

	getLineXScale = () => {
		const { data } = this.props;
		this.xScale = scaleLinear()
			.domain([0, Math.max(...data.map(d => d.power))])
			.rangeRound([0, this.props.x]);
		return this.xScale;
	};

	drawLineXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' + this.margin + ',' + (this.props.y - this.margin) + ')'
			)
			.call(axisBottom(this.getLineXScale()));
	};

	// Make y axis zoomable for bar and line
	getYScale = () => {
		this.yScale = scaleLinear()
			.domain([0, 110])
			.rangeRound([this.props.y - this.margin, 5]);
		return this.yScale;
	};

	drawYAxis = () => {
		select(this.yAxisRef)
			.attr('transform', 'translate(' + this.margin + ',0)')
			.call(axisLeft(this.getYScale()));
	};

	render() {
		const {
			x,
			y,
			data,
			type,
			appState,
			toggleToolTip,
			toggleToolTipOff
		} = this.props;
		const xScale =
			type === 'BAR_GRAPH' ? this.getBarXScale() : this.getLineXScale();
		const yScale = this.getYScale();
		const graph =
			type === 'BAR_GRAPH' ? (
				<BarGraph
					x={x}
					y={y}
					xScale={xScale}
					yScale={yScale}
					data={data}
					{...appState}
					toggleToolTip={toggleToolTip}
					toggleToolTipOff={toggleToolTipOff}
				/>
			) : (
				<LineGraph
					x={x}
					y={y}
					xScale={xScale}
					yScale={yScale}
					data={data}
					{...appState}
					toggleToolTip={toggleToolTip}
					toggleToolTipOff={toggleToolTipOff}
				/>
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
