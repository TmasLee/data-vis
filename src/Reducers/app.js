let defaultState = {
	containerSize: {
		x: 700,
		y: 700
	},
	graphType: 'BAR_GRAPH',
	showGridLines: true,
	data: []
};

function app(state = defaultState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			return {
				...state,
				data: action.data
			};
		case 'SOMETHING':
			return {
				...state
			};
		default:
			return state;
	}
}

export default app;
