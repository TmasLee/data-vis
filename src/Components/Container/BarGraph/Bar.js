import React, { Component } from 'react';
import { select, easeLinear } from 'd3';
import { transition as d3Transition } from 'd3-transition';

class Bar extends Component {
	constructor(props) {
		super(props);

		this.toolTipVisibility = 'hidden';
		this.transition = d3Transition()
			.duration(1000)
			.ease(easeLinear);
	}

	componentDidMount() {
		this.updateBar(true);
		this.toggleToolTip();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.updateBar(false);
		}
	}

	toggleToolTip = e => {
		e.preventDefault();
		select(this.toolTipRef)
			.append('div')
			.style('position', 'absolute')
			.style('z-index', '10')
			.style('visibility', this.toolTipVisibility)
			.style('background', '#000')
			.text('xD');
	};

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

	render() {
		const { x, width } = this.props;
		return (
			<g ref={ref => this.totalRef}>
				<rect
					x={x}
					width={width}
					ref={ref => (this.barRef = ref)}
					onMouseOver={e => {
						this.showToolTip(e);
					}}
				/>
				<g ref={ref => (this.toolTipRef = ref)} />
			</g>
		);
	}
}

export default Bar;
