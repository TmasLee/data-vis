import React, { Component } from 'react';
import { connect } from 'react-redux';

import GraphTypeSelector from '../Presentational/GraphTypeSelector';
import GraphContainer from '../Presentational/GraphContainer';
import * as appActions from '../../Actions/appActions';
import Info from '../Presentational/Info';
import Menu from '../Presentational/Menu';

const style = {
	app: {
		display: 'flex',
		height: '100vh',
		alignItems: 'center',
		flexDirection: 'column'
	},
	selector: {
		textAlign: 'center'
	}
};

/**
 * To Add:
 * -	ComponentDidUpdate in datapoints to update when data changes
 * -  Graph titles in axes.js
 * -	Graph axes labels
 * -	Optimize loading/saving data
 * -  Info based on graph selected --> Explain LineGraph data is lab data
 * -	Put graph folders into presentational folder
 * -	Render empty data for transition
 * -	Call actions in other components?
 * -	Currently rendering 2 svgs, 1 for axes 1 for a graph. Look into this.
 */

class App extends Component {
	constructor() {
		super();
		this.state = {
			visibility: 'hidden',
			toolTipX: 0,
			toolTipY: 0,
			toolTipText: ''
		};
		this.menuItems = [
			{
				name: 'Randomize Data!',
				func: this.randomizeData
			},
			{
				name: 'Select trial data',
				func: this.selectTrial
			}
		];
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		this.props.dispatch(appActions.fetchData());
		this.props.dispatch(appActions.fetchTrialData('Holmium', 1));
	}

	handleResize = e => {
		this.props.dispatch(appActions.resizeWindow());
	};

	randomizeData = () => {
		this.props.dispatch(appActions.randomizeAndFetch());
	};

	selectTrial = (chemical, trialNum) => {
		this.props.dispatch(appActions.fetchTrialData(chemical, trialNum));
	};

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
		const { match, lineData, windowSize, data } = this.props;
		if (!this.props.data) {
			return null;
		} else {
			// console.log(match);
			return (
				<div style={style.app}>
					<Info />
					<GraphContainer
						type={match.params.type || 'BAR_GRAPH'}
						data={data}
						lineData={lineData}
						appState={this.state}
						toggleToolTip={this.toggleToolTip}
						toggleToolTipOff={this.toggleToolTipOff}
						{...windowSize}
					/>
					<GraphTypeSelector style={style.selector} />
					<Menu
						type={match.params.type || 'BAR_GRAPH'}
						display={this.menuItems}
					/>
				</div>
			);
		}
	}
}

export default connect((state, props) => {
	return {
		windowSize: state.app.windowSize,
		graphType: state.app.graphType,
		data: state.app.data,
		lineData: state.app.lineData
	};
})(App);
