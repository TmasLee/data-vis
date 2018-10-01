import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as menuActions from '../../Actions/menuActions';
import MenuBtn from '../Presentational/MenuBtn';

class MenuContainer extends Component {
	constructor() {
		super();
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

	render() {
		const { type } = this.props;
		return <MenuBtn type={type} updating={type} display={this.menuItems} />;
	}
}

const mapStateToProps = state => {
	return {
		updatingBar: state.menu.updatingBar
	};
};

const mapDispatchToProps = dispatch => {
	return {
		randomizeData: () => {
			dispatch(menuActions.randomizeAndFetch());
			dispatch(menuActions.disableBtn());
		},
		enableBtn: () => dispatch(menuActions.enableBtn()),
		selectTrial: (chemical, trialNum) =>
			dispatch(menuActions.fetchTrialData(chemical, trialNum))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuContainer);
