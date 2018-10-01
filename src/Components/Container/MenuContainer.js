import { connect } from 'react-redux';

import * as menuActions from '../../Actions/menuActions';
import MenuBtn from '../Presentational/MenuBtn';

const mapStateToProps = (state, ownProps) => ({
	...state,
	...ownProps
});

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
)(MenuBtn);
