let url = 'http://localhost:8000/data/';

export const fetchData = () => {
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
};

export const fetchDonutData = () => {
	return dispatch => {
		fetch(`${url}donutData`, { method: 'GET' })
			.then(res => {
				return res.json();
			})
			.then(res => {
				dispatch({
					type: 'FETCH_DONUT_DATA',
					data: res.data
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const randomizeData = () => {
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
};

export const randomizeAndFetch = () => {
	return dispatch => {
		dispatch(randomizeData())
			.then(res => {
				dispatch(fetchData());
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const resizeWindow = () => {
	return dispatch => {
		dispatch({
			type: 'RESIZE_WINDOW_DIMENSIONS',
			windowSize: {
				graphWidth: window.innerWidth * 0.95,
				graphHeight: window.innerHeight * 0.85
			}
		});
	};
};
