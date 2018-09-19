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
				data: action.data,
				...state
			};

		default:
			return state;
	}
}

export default app;
