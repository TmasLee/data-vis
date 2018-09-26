import React, { Component } from 'react';
import { select } from 'd3';

class DataPoint extends Component {
	constructor() {
		super();
		this.radius = 4;
		this.color = 'blue';
	}

	componentDidMount() {
		this.updatePosition();
	}

	componentDidUpdate(prevProps, prevState) {
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
		// Increase radius
		select(this.pointRef).style('fill', 'red');
	};

	onMouseOut = () => {
		select(this.pointRef).style('fill', 'blue');
	};

	render() {
		return (
			<circle
				ref={ref => (this.pointRef = ref)}
				r={this.radius}
				fill={this.color}
				onMouseOver={e => {
					e.preventDefault();
					this.onMouseOver();
				}}
				onMouseOut={e => {
					e.preventDefault();
					this.onMouseOut();
				}}
			/>
		);
	}
}

export default DataPoint;
