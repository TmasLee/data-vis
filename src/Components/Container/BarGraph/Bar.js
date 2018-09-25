import React, { Component } from 'react';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

class Bar extends Component {
	constructor() {
		super();
		this.transition = d3Transition()
			.duration(1000)
			.ease(easeLinear);
	}

	componentDidMount() {
		this.updateBar(true);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.height !== this.props.height ||
			prevProps.y !== this.props.y
		) {
			this.updateBar(false);
		}
	}

	updateBar = initialRender => {
		const { y, height, color } = this.props;

		if (initialRender) {
			select(this.barRef)
				.attr('y', y)
				.attr('height', height)
				.attr('fill', color);
		} else {
			select(this.barRef)
				.transition(this.transition)
				.attr('y', y)
				.attr('height', height)
				.attr('fill', color);
		}
	};

	change = () => {
		select(this.barRef).style('fill', 'orange');
	};

	render() {
		const {
			x,
			y,
			width,
			rawData,
			toggleToolTip,
			toggleToolTipOff
		} = this.props;
		return (
			<rect
				ref={ref => (this.barRef = ref)}
				x={x}
				width={width}
				onMouseOver={e => {
					e.preventDefault();
					toggleToolTip(x, y, rawData);
				}}
				onMouseOut={e => {
					e.preventDefault();
					toggleToolTipOff();
				}}
			/>
		);
	}
}

export default Bar;
