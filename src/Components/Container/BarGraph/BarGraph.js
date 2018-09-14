import React, { Component } from 'react';
import { select } from 'd3';
import Axes from '../../Presentational/Axes';

const style = {
	border: '1px solid black'
};

class BarGraph extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.drawGraph();
	}

	componentDidUpdate() {}

	drawGraph = () => {
		const svg = select(this.svgRef);
	};

	render() {
		const { x, y } = this.props;
		return (
			<svg width={x} height={y} style={style} ref={ref => (this.svgRef = ref)}>
				<Axes width={x} height={y} />
			</svg>
		);
	}
}

export default BarGraph;

let sampleData = [10, 20, 30, 40, 60, 150];
