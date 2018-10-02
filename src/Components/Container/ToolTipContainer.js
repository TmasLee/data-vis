import { connect } from 'react-redux';
import * as toolTipActions from '../../Actions/toolTipActions';
import Tooltip from '../Presentational/Tooltip';

const mapStateToProps = (state, ownProps) => {
	const { x, y, visibility, toolTipText } = state.tooltip;
	const { xScale, yScale, type } = ownProps;
	return {
		x: x,
		y: y,
		visibility: visibility,
		toolTipText: toolTipText,
		xScale: xScale,
		yScale: yScale,
		type: type
	};
};

const mapDispatchToProps = dispatch => ({
	toggleToolTipOn: (x, y, data) => {
		dispatch(toolTipActions.toolTipOn(x, y, data));
	},
	toggleToolTipOff: () => {
		dispatch(toolTipActions.toolTipOff());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tooltip);
