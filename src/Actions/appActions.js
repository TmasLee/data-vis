let url = 'http://localhost:8000/data/';

export function fetchData() {
	return dispatch => {
		fetch(`${url}`, { method: 'GET' })
			.then(res => {
				return res.json();
			})
			.then(res => {
				// console.log(res);
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
		fetch(`${url}` + '/randomize').then(res => {
			res.json();
		});
	};
}
