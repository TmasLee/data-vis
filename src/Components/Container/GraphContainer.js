import { connect } from 'react-redux';

import Axes from '../Presentational/Axes';
import * as appActions from '../../Actions/appActions';
import * as menuActions from '../../Actions/menuActions';
import * as toolTipActions from '../../Actions/toolTipActions';

const mapStateToProps = (state, ownProps) => {
	return {
		type: ownProps.type,
		data:
			ownProps.type === 'BAR_GRAPH'
				? state.app.data
				: ownProps.type === 'LINE_GRAPH'
					? state.app.lineData
					: state.app.donutData,
		x: state.app.windowSize.graphWidth,
		y: state.app.windowSize.graphHeight
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: () => {
		dispatch(appActions.fetchData());
	},
	fetchTrialData: (chemical, trialNum) => {
		dispatch(menuActions.fetchTrialData(chemical, trialNum));
	},
	fetchDonutData: () => {
		dispatch(appActions.fetchDonutData());
	},
	resizeWindow: () => {
		dispatch(appActions.resizeWindow());
	},
	enableBtn: () => {
		dispatch(menuActions.enableBtn());
	},
	toolTipOn: (x, y, data) => {
		dispatch(toolTipActions.toolTipOn(x, y, data));
	},
	toolTipOff: () => {
		dispatch(toolTipActions.toolTipOff());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Axes);
