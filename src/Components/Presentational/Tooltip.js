import React, { Component } from 'react';
import { select } from 'd3';

/**
 * To-Do:
 * -	Fix hard-coded variables. Make dynamic
 */
class Tooltip extends Component {
	constructor(props) {
		super(props);
		this.height = 40;
		this.centerOffSet = 9.5; // Calculated by: (bar width - tooltip width)/2
		this.heightOffSet = 10; //Height of triangle
		this.halfBarWidth = 59.5; // Center triangle tip
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
		const { x, y, visibility } = this.props;

		select(this.toolTipRect)
			.attr('x', x + this.centerOffSet)
			.attr('y', y - this.height - this.heightOffSet)
			.attr('visibility', `${visibility}`)
			.style('fill', 'rgb(145,150,160)');

		select(this.toolTipText)
			.attr('x', x + this.halfBarWidth)
			.attr('y', y - this.textCenter)
			.attr('text-anchor', 'middle')
			.style('font-size', 12)
			.text(function(d) {
				return 'xD';
			})
			.attr('visibility', `${visibility}`);

		select(this.toolTipTriangle)
			.attr(
				'points',
				`${x + this.halfBarWidth},${y} ${x +
					this.halfBarWidth -
					this.halfTriangleWidth},${y - this.heightOffSet} ${x +
					this.halfBarWidth +
					this.halfTriangleWidth},${y - this.heightOffSet}`
			)
			.attr('visibility', `${visibility}`)
			.style('fill', 'rgb(145,150,160');
	};

	render() {
		const { x, y } = this.props;

		return (
			<g>
				<rect
					ref={ref => (this.toolTipRect = ref)}
					width={100}
					height={this.height}
				/>
				<text ref={ref => (this.toolTipText = ref)} />
				<polygon
					ref={ref => (this.toolTipTriangle = ref)}
					points={`${x + this.halfBarWidth},${y} ${x +
						this.halfBarWidth -
						this.halfTriangleWidth},${y - this.heightOffSet} ${x +
						this.halfBarWidth +
						this.halfTriangleWidth},${y - this.heightOffSet}`}
				/>
			</g>
		);
	}
}

export default Tooltip;
