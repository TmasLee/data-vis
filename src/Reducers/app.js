let defaultState = {
	windowSize: {
		graphWidth: window.innerWidth * 0.95,
		graphHeight: window.innerHeight * 0.8
	},
	data: [
		{
			name: 'The Ancient One',
			power: 1,
			color: 'hsl(200,90%,61%)'
		},
		{
			name: 'Dr. Strange',
			power: 1,
			color: 'hsl(144,90%,61%)'
		},
		{
			name: 'Me',
			power: 1,
			color: 'hsl(155,90%,61%)'
		},
		{
			name: 'Dormammu',
			power: 1,
			color: 'hsl(222,90%,61%)'
		},
		{
			name: 'Mordo',
			power: 1,
			color: 'hsl(334,90%,61%)'
		}
	],
	lineData: [],
	donutData: []
};

function app(state = defaultState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			return {
				...state,
				data: action.data
			};
		case 'FETCH_DONUT_DATA':
			return {
				...state,
				donutData: action.data
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
