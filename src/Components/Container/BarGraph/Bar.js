import React, { Component } from 'react';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

class Bar extends Component {
	constructor(props) {
		super(props);

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
		const { x, y, width, toggleToolTip, toggleToolTipOff } = this.props;
		return (
			<rect
				ref={ref => (this.barRef = ref)}
				x={x}
				width={width}
				onMouseOver={e => {
					e.preventDefault();
					// console.log('keke');
					toggleToolTip(x, y);
				}}
				onMouseOut={e => {
					e.preventDefault();
					// console.log('fefe');
					toggleToolTipOff();
				}}
			/>
		);
	}
}

export default Bar;
