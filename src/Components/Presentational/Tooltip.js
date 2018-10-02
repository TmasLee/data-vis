import React, { Component } from 'react';
import { select } from 'd3';

class Tooltip extends Component {
	constructor(props) {
		super(props);
		const { xScale, type } = this.props;
		this.height = 40;
		this.width = 119;
		this.heightOffSet = 10; //Height of triangle
		this.halfTriangleWidth = 5;
		this.verticalTextCenter = 27;
		this.halfBarWidth = type === 'BAR_GRAPH' ? xScale.bandwidth() / 2 : 0;
		this.centerOffSet =
			type === 'BAR_GRAPH' ? (xScale.bandwidth() - this.width) / 2 : -55.5;
	}
	componentDidMount() {
		this.updatePosition();
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.updatePosition();
		}
	}

	updatePosition = () => {
		const { x, y, visibility, toolTipText } = this.props;
		const {
			centerOffSet,
			halfBarWidth,
			halfTriangleWidth,
			verticalTextCenter,
			height,
			heightOffSet
		} = this;

		select(this.toolTipRect)
			.attr('x', x + centerOffSet)
			.attr('y', y - height - heightOffSet)
			.attr('rx', 7)
			.attr('ry', 7)
			.attr('visibility', `${visibility}`)
			.style('fill', 'rgb(45,45,45)');

		select(this.toolTipText)
			.attr('x', x + halfBarWidth)
			.attr('y', y - verticalTextCenter)
			.attr('text-anchor', 'middle')
			.style('font-size', 11)
			.style('fill', 'white')
			.text(function() {
				return `Value: [${toolTipText}]`;
			})
			.attr('visibility', `${visibility}`);

		select(this.toolTipTriangle)
			.attr(
				'points',
				`${x + halfBarWidth},${y} ${x + halfBarWidth - halfTriangleWidth},${y -
					heightOffSet} ${x + halfBarWidth + halfTriangleWidth},${y -
					heightOffSet}`
			)
			.attr('visibility', `${visibility}`)
			.style('fill', 'rgb(45,45,45');
	};

	render() {
		const { x, y } = this.props;
		const {
			height,
			width,
			halfBarWidth,
			halfTriangleWidth,
			heightOffSet
		} = this;
		return (
			<g>
				<rect
					ref={ref => (this.toolTipRect = ref)}
					width={width}
					height={height}
				/>
				<text ref={ref => (this.toolTipText = ref)} />
				<polygon
					ref={ref => (this.toolTipTriangle = ref)}
					points={`${x + halfBarWidth},${y} ${x +
						halfBarWidth -
						halfTriangleWidth},${y - heightOffSet} ${x +
						halfBarWidth +
						halfTriangleWidth},${y - heightOffSet}`}
				/>
			</g>
		);
	}
}

export default Tooltip;
