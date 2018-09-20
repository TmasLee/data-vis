import React, { Component } from 'react';
import { select, easeLinear } from 'd3';
import { Transition, transition as d3Transition } from 'd3-transition';

class Bar extends Component {
	constructor(props) {
		super(props);
		this.t = d3Transition()
			.duration(750)
			.ease(easeLinear);
	}

	componentDidMount() {
		this.updateHeight();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.updateHeight();
		}
	}

	updateHeight = () => {
		select(this.barRef)
			.transition(this.t)
			.attr('y', this.props.y)
			.attr('height', this.props.height);
	};

	render() {
		const { x, width, color } = this.props;
		return (
			<rect x={x} width={width} fill={color} ref={ref => (this.barRef = ref)} />
		);
	}
}

export default Bar;
