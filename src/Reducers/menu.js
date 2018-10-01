let defaultState = {
	updatingBar: false
};

function menu(state = defaultState, action) {
	switch (action.type) {
		case 'BAR_UPDATING':
			return {
				...state,
				updatingBar: action.updatingBar
			};
		case 'BAR_UPDATING_FINISHED':
			return {
				...state,
				updatingBar: action.updatingBar
			};
		default:
			return state;
	}
}

export default menu;
