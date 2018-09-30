import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tooltip from '../Presentational/Tooltip';

class ToolTipContainer extends Component {
	constructor() {
		super();
		this.state = {
			visibility: 'hidden',
			toolTipX: 0,
			toolTipY: 0,
			toolTipText: '',
			toolTipWidth: 119
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
		return (
			<div>
				<Tooltip />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = state => {
	return {};
};

export default connect()(ToolTipContainer);
