import { connect } from 'react-redux';
import * as toolTipActions from '../../Actions/toolTipActions';
import Tooltip from '../Presentational/Tooltip';

const mapStateToProps = (state, ownProps) => ({
	...state,
	...ownProps
});

const mapDispatchToProps = dispatch => {
	return {
		toggleToolTipOn: (x, y, data) => {
			dispatch(toolTipActions.toolTipOn(x, y, data));
		},
		toggleToolTipOff: () => {
			dispatch(toolTipActions.toolTipOff());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tooltip);
