import React, { Component } from 'react';
import { connect } from 'react-redux';

import Axes from '../Presentational/Axes';
import * as appActions from '../../Actions/appActions';

/*
 * This reads graph type to display from the URL.
 */
class GraphContainer extends Component {
	constructor() {
		super();
		this.graphWidth = windowWidth * 0.95;
		this.graphHeight = windowHeight * 0.85;
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		this.props.dispatch(appActions.fetchData());
		this.props.dispatch(appActions.fetchTrialData('Holmium', 1));
	}

	handleResize = e => {
		this.props.dispatch(appActions.resizeWindow());
	};

	render() {
		const { type } = this.props;
		return (
			<Axes
				type={type}
				x={this.graphWidth}
				y={this.graphHeight}
				data={type === 'BAR_GRAPH' ? data : lineData}
				lineData={lineData}
			/>
		);
	}
}

// const mapStateToProps

export default connect(state => {
	return {
		windowSize: state.app.windowSize,
		data: state.app.data,
		lineData: state.app.lineData
	};
})(GraphContainer);
