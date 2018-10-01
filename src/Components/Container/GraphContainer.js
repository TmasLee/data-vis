import { connect } from 'react-redux';

import Axes from '../Presentational/Axes';
import * as appActions from '../../Actions/appActions';
import * as menuActions from '../../Actions/menuActions';

const mapStateToProps = (state, ownProps) => {
	return {
		...state,
		x: state.app.windowSize.graphWidth,
		y: state.app.windowSize.graphHeight,
		type: ownProps.type,
		data: ownProps.type === 'BAR_GRAPH' ? state.app.data : state.app.lineData
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: () => {
		dispatch(appActions.fetchData());
	},
	fetchTrialData: (chemical, trialNum) => {
		dispatch(menuActions.fetchTrialData(chemical, trialNum));
	},
	resizeWindow: () => {
		dispatch(appActions.resizeWindow());
	},
	enableBtn: () => {
		dispatch(menuActions.enableBtn());
	}
	// disableBtn: () => {
	// 	dispatch(menuActions.disableBtn());
	// }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Axes);
