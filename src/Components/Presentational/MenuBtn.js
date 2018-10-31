import React from 'react';

import { GraphType } from '../../Actions';

// Make into reusable component. Use children.
const MenuBtn = ({
	type,
	updatingBar,
	randomizeData,
	selectTrial,
	shuffleAndRandomize
}) => {
	const { BAR_GRAPH, SCATTER_PLOT, DONUT_CHART } = GraphType;
	const display = [
		{
			name: 'Randomize Data',
			func: randomizeData
		},
		{
			name: 'Select trial data',
			func: selectTrial
		},
		{
			name: 'Shuffle and randomize data',
			func: shuffleAndRandomize
		}
	];
	if (type === BAR_GRAPH) {
		if (updatingBar) {
			return <button>Randomizing......</button>;
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
	} else if (type === SCATTER_PLOT) {
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
	} else if (type === DONUT_CHART) {
		return (
			<button
				onClick={e => {
					e.preventDefault();
					display[2].func();
				}}>
				{display[2].name}
			</button>
		);
	} else {
		return <div />;
	}
};

export default MenuBtn;
