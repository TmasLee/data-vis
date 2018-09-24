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
 * -	Make random button specific for bar_graph
 * -	Tooltip reusable
 * -  info paragraph based on what graph selected
 * -	Select data file for Pie
 * -	Put graph folders into presentational folder
 */

class App extends Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			{
				name: 'Randomize Data!',
				func: this.randomizeData
			}
		];
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		this.props.dispatch(appActions.fetchData());
	}

	handleResize = e => {
		this.props.dispatch(appActions.resizeWindow());
	};

	randomizeData = () => {
		this.props.dispatch(appActions.randomizeAndFetch());
	};

	render() {
		const { match, graphType, windowSize, data } = this.props;
		if (!this.props.data) {
			return null;
		} else {
			console.log(match);
			return (
				<div style={style.app}>
					<Info />
					<GraphContainer
						type={match.params.type || 'BAR_GRAPH'}
						data={data}
						{...windowSize}
					/>
					<GraphTypeSelector style={style.selector} />
					<Menu items={this.menuItems} />
				</div>
			);
		}
	}
}

export default connect((state, props) => {
	return {
		windowSize: state.app.windowSize,
		graphType: state.app.graphType,
		data: state.app.data
	};
})(App);
