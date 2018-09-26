let defaultState = {
	windowSize: {
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight
	},
	graphType: 'BAR_GRAPH',
	data: [],
	lineData: []
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
		case 'FETCH_HOLMIUM_1':
			return {
				...state,
				lineData: action.data
			};
		case 'FETCH_HOLMIUM_2':
			return {
				...state,
				lineData: action.data
			};
		case 'FETCH_KMNO4_1':
			return {
				...state,
				lineData: action.data
			};
		case 'FETCH_KMNO4_2':
			return {
				...state,
				lineData: action.data
			};
		default:
			return state;
	}
}

export default app;
