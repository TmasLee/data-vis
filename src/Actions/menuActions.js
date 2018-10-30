let url = 'http://localhost:5000/';

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
			.then(res => res.text())
			.then(res => {
				return JSON.parse(res);
			})
			.then(res => {
				dispatch({
					type:
						chemical === 'Holmium'
							? `FETCH_HOLMIUM_${trial}`
							: `FETCH_KMNO4_${trial}`,
					data: res
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
};
