import React, { Component } from 'react';
import { connect } from 'react-redux';

import GraphTypeSelector from '../Presentational/GraphTypeSelector';
import GraphContainer from '../Presentational/GraphContainer';
import * as appActions from '../../Actions/appActions';

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
	componentDidMount() {
		this.props.dispatch(appActions.fetchData());
	}

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
				</div>
			);
		}
	}
}

export default connect((state, props) => {
	return {
		containerSize: state.app.containerSize,
		graphType: state.app.graphType,
		// showGridLines: state.app.showGridLines,
		data: state.app.data
	};
})(App);
