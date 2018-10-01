import { connect } from 'react-redux';

import * as menuActions from '../../Actions/menuActions';
import { randomizeAndFetch } from '../../Actions/appActions';
import MenuBtn from '../Presentational/MenuBtn';

const mapStateToProps = state => {
	return {
		updatingBar: state.menu.updatingBar
	};
};

const mapDispatchToProps = dispatch => ({
	randomizeData: () => {
		dispatch(menuActions.disableBtn());
		dispatch(randomizeAndFetch());
	},
	selectTrial: (chemical, trialNum) =>
		dispatch(menuActions.fetchTrialData(chemical, trialNum))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuBtn);
