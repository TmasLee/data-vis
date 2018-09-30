import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

import BarGraph from './BarGraph/BarGraph';
import LineGraph from './LineGraph/LineGraph';
import PieGraph from './PieChart/PieChart';

class Axes extends Component {
	constructor() {
		super();
		this.margin = 60;
		this.rightMargin = 20;
		this.topMargin = 5;
		this.toolTipWidth = 119;
		this.labelOffset = 15;
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

	componentDidUpdate(prevProps) {
		const { x, y, type } = this.props;
		if (type === 'BAR_GRAPH') {
			this.drawBarXAxis();
		}
		if (type === 'LINE_GRAPH') {
			this.drawLineXAxis();
		}

		//  Resizes graph on window resize
		if (prevProps.x !== x || prevProps.y !== y) {
			if (type === 'BAR_GRAPH') {
				this.drawBarXAxis();
			}
			if (type === 'LINE_GRAPH') {
				this.drawLineXAxis();
			}
			this.drawYAxis();
		}

		this.drawYAxis();
	}

	getBarXScale = () => {
		const { data, x } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([this.margin, x - this.rightMargin])
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
		this.drawXAxisLabel('People');
	};

	getLineXScale = () => {
		const { data, x } = this.props;
		const min = Math.min(...data.map(d => d.Wavelength));
		const max = Math.max(...data.map(d => d.Wavelength));
		this.xScale = scaleLinear()
			.domain([min - 10, max * 1.03])
			.rangeRound([this.margin, x - this.margin]);
		return this.xScale;
	};

	drawLineXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' + 0 + ',' + (this.props.y - this.margin) + ')'
			)
			.call(axisBottom(this.getLineXScale()));
		this.drawXAxisLabel('Wavelength');
	};

	drawXAxisLabel = name => {
		const { x, y } = this.props;
		select(this.xLabel)
			.attr('text-anchor', 'middle')
			.attr(
				'transform',
				'translate(' +
					(this.margin / 2 + (x - this.rightMargin) / 2) +
					',' +
					(y - this.labelOffset) +
					')'
			)
			.text(name);
	};

	getYScale = () => {
		const { type, data, y } = this.props;
		const max = Math.max(...data.map(d => d.Intensity));
		this.yScale = scaleLinear()
			.domain(type === 'BAR_GRAPH' ? [0, 110] : [0, max * 1.1])
			.rangeRound([y - this.margin, this.topMargin]);
		return this.yScale;
	};

	drawYAxis = () => {
		const { type, y } = this.props;
		select(this.yAxisRef)
			.attr('transform', 'translate(' + this.margin + ',' + 0 + ')')
			.call(axisLeft(this.getYScale()));
		select(this.yLabel)
			.attr('text-anchor', 'middle')
			.attr(
				'transform',
				'translate(' +
					(this.margin - 3 * this.labelOffset) +
					',' +
					(this.topMargin + (y - this.margin) / 2) +
					')rotate(-90)'
			)
			.text(type === 'BAR_GRAPH' ? 'Power' : 'Intensity');
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
				<text ref={ref => (this.xLabel = ref)} />
				<text ref={ref => (this.yLabel = ref)} />
				{graph}
			</svg>
		);
	}
}

export default Axes;
