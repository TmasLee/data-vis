let defaultState = {
	updatingBar: false
};

function menu(state = defaultState, action) {
	switch (action.type) {
		case 'DISABLE_BUTTON':
			return {
				...state,
				updatingBar: action.updatingBar
			};
		case 'ENABLE_BUTTON':
			return {
				...state,
				updatingBar: action.updatingBar
			};
		default:
			return state;
	}
}

export default menu;
