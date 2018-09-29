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
		height: '98vh',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	menu: {
		display: 'flex',
		width: '35%',
		justifyContent: 'space-between'
	}
};

/**
 * To Add:
 * -	Better way to pass props through children/multiple components
 * -	Zoomable y axis? Scatter scalable x?
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
		this.props.dispatch(appActions.disableBtn());
	};

	enableBtn = () => {
		this.props.dispatch(appActions.enableBtn());
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
		const { match, windowSize, updatingBar, data, lineData } = this.props;
		if (!this.props.data) {
			return null;
		} else {
			// console.log(match);
			return (
				<div style={style.app}>
					<Info type={match.params.type || 'BAR_GRAPH'} />
					<GraphContainer
						style={style.graphContainer}
						type={match.params.type || 'BAR_GRAPH'}
						data={data}
						lineData={lineData}
						appState={this.state}
						enableBtn={this.enableBtn}
						toggleToolTip={this.toggleToolTip}
						toggleToolTipOff={this.toggleToolTipOff}
						{...windowSize}
					/>
					<div style={style.menu}>
						<GraphTypeSelector />
						<Menu
							type={match.params.type || 'BAR_GRAPH'}
							updatingBar={updatingBar}
							display={this.menuItems}
						/>
					</div>
				</div>
			);
		}
	}
}

export default connect((state, props) => {
	return {
		windowSize: state.app.windowSize,
		updatingBar: state.app.updatingBar,
		data: state.app.data,
		lineData: state.app.lineData
	};
})(App);
