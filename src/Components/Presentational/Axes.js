import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

import BarGraph from '../Container/BarGraph/BarGraph';
import LineGraph from '../Container/LineGraph/LineGraph';

class Axes extends Component {
	constructor() {
		super();
		this.margin = 60;
		this.rightMargin = 20;
		this.topMargin = 5;
		this.toolTipWidth = 119;
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
			if (this.props.type === 'BAR_GRAPH') {
				this.drawBarXAxis();
			}
			if (this.props.type === 'LINE_GRAPH') {
				this.drawLineXAxis();
			}
			this.drawYAxis();
		}

		this.drawYAxis();
	}

	getBarXScale = () => {
		const { data } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([this.margin, this.props.x - this.rightMargin])
			.padding(0.1);
		return this.xScale;
	};

	drawBarXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' + 0 + ',' + (this.props.y - this.margin) + ')'
			)
			.call(axisBottom(this.getBarXScale()));
	};

	getLineXScale = () => {
		const { data } = this.props;
		const min = Math.min(...data.map(d => d.Wavelength));
		const max = Math.max(...data.map(d => d.Wavelength));
		this.xScale = scaleLinear()
			.domain([min - 10, max * 1.03])
			.rangeRound([this.margin, this.props.x - this.margin]);
		return this.xScale;
	};

	drawLineXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' + 0 + ',' + (this.props.y - this.margin) + ')'
			)
			.call(axisBottom(this.getLineXScale()));
	};

	getYScale = () => {
		const { type, data } = this.props;
		const max = Math.max(...data.map(d => d.Intensity));
		this.yScale = scaleLinear()
			.domain(type === 'BAR_GRAPH' ? [0, 110] : [0, max * 1.1])
			.rangeRound([this.props.y - this.margin, this.topMargin]);
		return this.yScale;
	};

	drawYAxis = () => {
		select(this.yAxisRef)
			.attr('transform', 'translate(' + this.margin + ',' + 0 + ')')
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
					toolTipWidth={this.toolTipWidth}
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
					toolTipWidth={this.toolTipWidth}
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
