let url = 'http://localhost:8000/data/';

export function fetchData() {
	return dispatch => {
		fetch(`${url}`, { method: 'GET' })
			.then(res => {
				return res.json();
			})
			.then(res => {
				dispatch({
					type: 'FETCH_DATA',
					data: res.data
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
}

export function randomizeData() {
	return dispatch => {
		return fetch(`${url}randomize`, { method: 'PUT' })
			.then(res => {
				dispatch({
					type: 'RANDOMIZE_DATA'
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
}

export function randomizeAndFetch() {
	return dispatch => {
		dispatch(randomizeData())
			.then(res => {
				dispatch(fetchData());
			})
			.catch(err => {
				console.error(err);
			});
	};
}

export function resizeWindow() {
	return {
		type: 'RESIZE_WINDOW_DIMENSIONS',
		windowSize: {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		}
	};
}
