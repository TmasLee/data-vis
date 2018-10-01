export const toolTipOn = (x, y, data) => {
	return {
		type: 'TOOLTIP_ON',
		visibility: 'visible',
		x: x,
		y: y,
		toolTipText: data
	};
};

export const toolTipOff = () => {
	return {
		type: 'TOOLTIP_OFF',
		visibility: 'hidden'
	};
};
