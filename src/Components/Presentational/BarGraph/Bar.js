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

	componentDidUpdate(prevProps) {
		if (
			prevProps.height !== this.props.height ||
			prevProps.y !== this.props.y
		) {
			if (prevProps.rawData !== this.props.rawData) {
				this.updateBar(false);
			} else {
				this.updateBar(true);
			}
		}
	}

	updateBar = initialRender => {
		const { y, height, enableBtn, color } = this.props;
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
				.attr('fill', color)
				.on('end', function() {
					enableBtn();
				});
		}
	};

	render() {
		const { x, y, rawData, width, toolTipOn, toolTipOff } = this.props;
		return (
			<rect
				ref={ref => (this.barRef = ref)}
				x={x}
				width={width}
				onMouseOver={e => {
					e.preventDefault();
					toolTipOn(x, y, rawData);
				}}
				onMouseOut={e => {
					e.preventDefault();
					toolTipOff();
				}}
			/>
		);
	}
}

export default Bar;
