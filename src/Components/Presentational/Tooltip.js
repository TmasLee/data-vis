import React, { Component } from 'react';
import { select } from 'd3';

/**
 * To-Do:
 * -	Make tooltip rect/triangle/text a separate component.
 * -	Fix hard-coded variables. Make dynamic
 */
class Tooltip extends Component {
	constructor() {
		super();
		this.height = 40;
		this.heightOffSet = 10; //Height of triangle
		this.halfTriangleWidth = 5;
		this.textCenter = 25;
	}
	componentDidMount() {
		this.updatePosition();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.updatePosition();
		}
	}

	updatePosition = () => {
		const { x, y, visibility, data, centerOffSet, halfBarWidth } = this.props;

		select(this.toolTipRect)
			.attr('x', x + centerOffSet)
			.attr('y', y - this.height - this.heightOffSet)
			.attr('rx', 7)
			.attr('ry', 7)
			.attr('visibility', `${visibility}`)
			.style('fill', 'rgb(45,45,45)');

		select(this.toolTipText)
			.attr('x', x + halfBarWidth)
			.attr('y', y - this.textCenter)
			.attr('text-anchor', 'middle')
			.style('font-size', 12)
			.style('fill', 'white')
			.text(function() {
				return `Value: ${data}`;
			})
			.attr('visibility', `${visibility}`);

		select(this.toolTipTriangle)
			.attr(
				'points',
				`${x + halfBarWidth},${y} ${x +
					halfBarWidth -
					this.halfTriangleWidth},${y - this.heightOffSet} ${x +
					halfBarWidth +
					this.halfTriangleWidth},${y - this.heightOffSet}`
			)
			.attr('visibility', `${visibility}`)
			.style('fill', 'rgb(45,45,45');
	};

	render() {
		const { x, y, halfBarWidth } = this.props;
		return (
			<g>
				<rect
					ref={ref => (this.toolTipRect = ref)}
					width={119}
					height={this.height}
				/>
				<text ref={ref => (this.toolTipText = ref)} />
				<polygon
					ref={ref => (this.toolTipTriangle = ref)}
					points={`${x + halfBarWidth},${y} ${x +
						halfBarWidth -
						this.halfTriangleWidth},${y - this.heightOffSet} ${x +
						halfBarWidth +
						this.halfTriangleWidth},${y - this.heightOffSet}`}
				/>
			</g>
		);
	}
}

export default Tooltip;
