let defaultState = {
	updatingBar: false,
	updatingSlice: false
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
		case 'SLICE_UPDATING':
			return {
				...state,
				updatingSlice: action.updatingSlice
			};
		case 'SLICE_UPDATING_FINISHED':
			return {
				...state,
				updatingSlice: action.updatingSlice
			};
		default:
			return state;
	}
}

export default menu;
