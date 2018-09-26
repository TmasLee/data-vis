import React, { Component } from 'react';
import { select } from 'd3';

class DataPoint extends Component {
	constructor() {
		super();
		this.radius = 3;
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
		// Increase radius and change color
	};

	render() {
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
