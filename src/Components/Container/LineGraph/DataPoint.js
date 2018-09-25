import React, { Component } from 'react';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

class DataPoint extends Component {
	constructor() {
		super();
		this.radius = 10;
		this.color = 'blue';
	}

	componentDidMount() {
		this.updatePosition();
	}

	componentDidUpdate(prevProps, prevState) {}

	updatePosition = () => {
		const { x, y } = this.props;
		select(this.pointRef)
			.attr('cx', x)
			.attr('cy', y);
	};

	onHover = () => {
		// Increase radius
	};

	render() {
		const { x, y, data, toggleToolTip, toggleToolTipOff } = this.props;
		return (
			<circle
				ref={ref => (this.pointRef = ref)}
				r={this.radius}
				fill={this.color}
			/>
		);
	}
}

export default DataPoint;
