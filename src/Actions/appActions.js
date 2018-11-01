let url = 'http://localhost:5000/';

export const fetchData = type => {
	return dispatch => {
		fetch(`${url}${type}`, { method: 'GET' })
			.then(res => res.text())
			.then(res => {
				return JSON.parse(res);
			})
			.then(res => {
				dispatch({
					type: `FETCH_DATA_${type}`,
					data: res
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const randomizeData = type => {
	return dispatch => {
		return fetch(`${url}${type}`, { method: 'PUT' })
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

export const randomizeAndFetch = type => {
	return dispatch => {
		dispatch(randomizeData(type))
			.then(res => {
				dispatch(fetchData(type));
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
