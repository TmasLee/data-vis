let url = 'http://localhost:8000/data/';

export const disableBtn = () => {
	return {
		type: 'BAR_UPDATING',
		updatingBar: true
	};
};

export const enableBtn = () => {
	return {
		type: 'BAR_UPDATING_FINISHED',
		updatingBar: false
	};
};

export const fetchTrialData = (chemical, trial) => {
	return dispatch => {
		fetch(
			chemical === 'Holmium'
				? `${url}holmiumTrial${trial}`
				: `${url}KMnO4Trial${trial}`,
			{ method: 'GET' }
		)
			.then(res => {
				return res.json();
			})
			.then(res => {
				dispatch({
					type:
						chemical === 'Holmium'
							? `FETCH_HOLMIUM_${trial}`
							: `FETCH_KMNO4_${trial}`,
					data: res.data
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
};
