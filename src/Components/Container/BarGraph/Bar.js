import React, { Component } from 'react';
import { select } from 'd3';

class Bar extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.updateHeight();
	}

	componentDidUpdate() {}

	updateHeight = () => {
		select(this.rectRef)
			.attr('y', this.props.y)
			.attr('height', this.props.height);
	};

	render() {
		const { x, width, color } = this.props;
		// console.log(x);
		return (
			<rect
				x={x}
				width={width}
				fill={color}
				ref={ref => (this.rectRef = ref)}
			/>
		);
	}
}

export default Bar;
