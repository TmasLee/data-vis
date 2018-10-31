import React, { Component } from 'react';
import { select } from 'd3';

class DataPoint extends Component {
	constructor() {
		super();
		this.radius = 4;
		this.color = 'rgb(99, 152, 237)';
	}

	componentDidMount() {
		this.updatePosition();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.x !== this.props.x || prevProps.y !== this.props.y) {
			this.updatePosition();
		}
	}

	updatePosition = () => {
		const { x, y } = this.props;
		select(this.pointRef)
			.attr('cx', x)
			.attr('cy', y);
	};

	onMouseOver = () => {
		select(this.pointRef)
			.attr('fill', 'red')
			.attr('r', 8)
			.style('z-index', 1000);
	};

	onMouseOut = () => {
		select(this.pointRef)
			.attr('fill', 'rgb(99, 152, 237)')
			.attr('r', this.radius)
			.style('z-index', 1);
	};

	render() {
		const { x, y, data, toolTipOn, toolTipOff } = this.props;
		return (
			<circle
				ref={ref => (this.pointRef = ref)}
				r={this.radius}
				fill={this.color}
				onMouseOver={e => {
					e.preventDefault();
					this.onMouseOver();
					toolTipOn(x, y, data);
				}}
				onMouseOut={e => {
					e.preventDefault();
					this.onMouseOut();
					toolTipOff();
				}}
			/>
		);
	}
}

export default DataPoint;
