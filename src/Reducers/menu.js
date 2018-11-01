let defaultState = {
	updatingData: false
};

function menu(state = defaultState, action) {
	switch (action.type) {
		case 'BAR_GRAPH_UPDATING':
			return {
				...state,
				updatingData: action.updatingData
			};
		case 'BAR_GRAPH_UPDATING_FINISHED':
			return {
				...state,
				updatingData: action.updatingData
			};
		case 'DONUT_CHART_UPDATING':
			return {
				...state,
				updatingData: action.updatingData
			};
		case 'DONUT_CHART_UPDATING_FINISHED':
			return {
				...state,
				updatingData: action.updatingData
			};
		default:
			return state;
	}
}

export default menu;
