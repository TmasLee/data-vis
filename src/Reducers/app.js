let defaultState = {
	windowSize: {
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight
	},
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
		case 'RESIZE_WINDOW_DIMENSIONS':
			return {
				...state,
				windowSize: action.windowSize
			};
		default:
			return state;
	}
}

export default app;
