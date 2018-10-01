import React from 'react';

const MenuBtn = ({ type, updatingBar, randomizeData, selectTrial }) => {
	const display = [
		{
			name: 'Randomize Data!',
			func: randomizeData
		},
		{
			name: 'Select trial data',
			func: selectTrial
		}
	];
	if (type === 'BAR_GRAPH') {
		if (updatingBar) {
			return 'Randomizing';
		} else {
			return (
				<button
					onClick={e => {
						e.preventDefault();
						display[0].func();
					}}>
					{display[0].name}
				</button>
			);
		}
	} else {
		return (
			<select
				onChange={e => {
					e.preventDefault();
					display[1].func(
						e.target.value,
						e.target[e.target.selectedIndex].getAttribute('data-value')
					);
				}}>
				<option value="Holmium" data-value={1}>
					Holmium Trial 1
				</option>
				<option value="Holmium" data-value={2}>
					Holmium Trial 2
				</option>
				<option value="KMnO4" data-value={1}>
					KMnO4 Trial 1
				</option>
				<option value="KMnO4" data-value={2}>
					KMnO4 Trial 2
				</option>
			</select>
		);
	}
};

export default MenuBtn;
