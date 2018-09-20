import React, { Component } from 'react';
import { connect } from 'react-redux';

import GraphTypeSelector from '../Presentational/GraphTypeSelector';
import GraphContainer from '../Presentational/GraphContainer';
import * as appActions from '../../Actions/appActions';
import Menu from '../Presentational/Menu';

const style = {
	app: {
		display: 'flex',
		height: '100%',
		alignItems: 'center',
		flexDirection: 'column'
	},
	container: {},
	selector: {
		textAlign: 'center'
	}
};

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
		this.props.dispatch(appActions.fetchData());
	}

	componentDidUpdate(prevProps, prevState) {}

	randomizeData = () => {
		this.props.dispatch(appActions.randomizeAndFetch());
	};

	render() {
		const { match, graphType, containerSize, data } = this.props;
		if (!this.props.data) {
			return null;
		} else {
			console.log(match);
			return (
				<div style={style.app}>
					<GraphContainer
						style={style.container}
						type={match.params.type || 'BAR_GRAPH'}
						data={data}
						{...containerSize}
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
		containerSize: state.app.containerSize,
		graphType: state.app.graphType,
		data: state.app.data
	};
})(App);
