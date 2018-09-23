import React, { Component } from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

import Bar from './Bar';
import Tooltip from '../../Presentational/Tooltip';

class BarGraph extends Component {
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

	componentDidMount() {
		this.drawXAxis();
		this.drawYAxis(true);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.data !== this.props.data) {
			this.drawXAxis();
			this.drawYAxis();
		}
	}

	getXScale = () => {
		const { data } = this.props;
		this.xScale = scaleBand()
			.domain(data.map(d => d.name))
			.rangeRound([0, this.props.x - this.state.margin])
			.padding(0.1);
		return this.xScale;
	};

	getYScale = () => {
		this.yScale = scaleLinear()
			.domain([0, 110])
			.rangeRound([this.props.y - this.state.margin, this.state.margin]);
		return this.yScale;
	};

	drawXAxis = () => {
		select(this.xAxisRef)
			.attr(
				'transform',
				'translate(' +
					this.state.margin +
					',' +
					(this.props.y - this.state.margin) +
					')'
			)
			.call(axisBottom(this.getXScale()));
	};

	drawYAxis = () => {
		select(this.yAxisRef)
			.attr('transform', 'translate(' + this.state.margin + ',0)')
			.call(axisLeft(this.getYScale()));
	};

	toggleToolTip = (x, y, data) => {
		this.setState({
			toolTipX: x,
			toolTipY: y,
			visibility: 'visible',
			toolTipText: data
		});
	};
	toggleToolTipOff = () => {
		this.setState({ visibility: 'hidden' });
	};

	render() {
		const { x, y, data } = this.props;
		const { margin, toolTipX, toolTipY, visibility, toolTipText } = this.state;
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
							x={xScale(d.name) + margin}
							y={yScale(d.sameness)}
							width={xScale.bandwidth()}
							height={y - yScale(d.sameness) - margin}
							color={d.color}
							rawData={d.sameness}
							toggleToolTip={this.toggleToolTip}
							toggleToolTipOff={this.toggleToolTipOff}
						/>
					))}
					<Tooltip
						x={toolTipX}
						y={toolTipY}
						visibility={visibility}
						data={toolTipText}
					/>
				</g>
			</svg>
		);
	}
}

export default BarGraph;
