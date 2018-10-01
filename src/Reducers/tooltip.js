let defaultState = {
	x: 0,
	y: 0,
	visibility: 'hidden',
	toolTipText: ''
};

function tooltip(state = defaultState, action) {
	switch (action.type) {
		case 'TOOLTIP_ON':
			return {
				...state,
				x: action.x,
				y: action.y,
				visibility: action.visibility,
				toolTipText: action.toolTipText
			};
		case 'TOOLTIP_OFF':
			return { ...state, visibility: action.visibility };
		default:
			return state;
	}
}

export default tooltip;
