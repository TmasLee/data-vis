let defaultState = {
	containerSize: {
		x: 700,
		y: 700
	},
	//Set default as nothing, default is home page
	graphType: 'BAR_GRAPH',
	data: []
};

function app(state = defaultState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			return {
				...state,
				data: action.data
			};
		case 'RANDOMIZE_DATA':
			return {
				...state
			};
		case '':
			return {
				...state
			};
		default:
			return state;
	}
}

export default app;
