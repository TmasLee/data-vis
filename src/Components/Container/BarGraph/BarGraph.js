import React, { Component } from 'react';

import Bar from './Bar';
import Tooltip from '../../Presentational/Tooltip';

class BarGraph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			margin: 25,
			visibility: 'hidden',
			toolTipX: 0,
			toolTipY: 0,
			toolTipText: ''
		};
	}

	toggleToolTip = (x, y, data) => {
		this.setState({
			toolTipX: x,
			toolTipY: y,
			visibility: 'visible',
			toolTipText: data
		});
	};

	toggleToolTipOff = () => {
		this.setState({ visibility: 'hidden' });
	};

	render() {
		const { x, y, xScale, yScale, data } = this.props;
		const { margin, toolTipX, toolTipY, visibility, toolTipText } = this.state;

		return (
			<svg width={x} height={y}>
				<g>
					{data.map((d, i) => (
						<Bar
							key={i}
							x={xScale(d.name) + margin}
							y={yScale(d.power)}
							width={xScale.bandwidth()}
							height={y - yScale(d.power) - margin}
							color={d.color}
							rawData={d.power}
							toggleToolTip={this.toggleToolTip}
							toggleToolTipOff={this.toggleToolTipOff}
						/>
					))}
					<Tooltip
						x={toolTipX}
						y={toolTipY}
						visibility={visibility}
						data={toolTipText}
					/>
				</g>
			</svg>
		);
	}
}

export default BarGraph;
