export const disableBtn = () => {
	return {
		type: 'DISABLE_BUTTON',
		updatingBar: true
	};
};

export const enableBtn = () => {
	return {
		type: 'ENABLE_BUTTON',
		updatingBar: false
	};
};
