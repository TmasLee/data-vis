import { connect } from 'react-redux';

import * as menuActions from '../../Actions/menuActions';
import { randomizeAndFetch } from '../../Actions/appActions';
import MenuBtn from '../Presentational/MenuBtn';

const mapStateToProps = state => {
	return {
		updatingData: state.menu.updatingData
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	randomizeData: () => {
		dispatch(menuActions.disableBtn(ownProps.type));
		dispatch(randomizeAndFetch(ownProps.type));
	},
	selectTrial: (chemical, trialNum) =>
		dispatch(menuActions.fetchTrialData(chemical, trialNum)),
	shuffleAndRandomize: () => {
		console.log('xD');
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuBtn);
