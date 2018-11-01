import React from 'react';

import { GraphType } from '../../Actions';
import Btn from './ReusableBtn';

const style = {
	loading: {
		border: 'none',
		backgroundColor: 'transparent',
		outline: 'none'
	}
};

const MenuBtn = ({
	type,
	updatingData,
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
		if (updatingData) {
			return <Btn style={style.loading}>Randomizing Bars</Btn>;
		} else {
			return <Btn onClick={display[0].func}>{display[0].name}</Btn>;
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
		if (updatingData) {
			return <Btn style={style.loading}>Randomizing Slices</Btn>;
		}
		return <Btn onClick={display[2].func}>{display[2].name}</Btn>;
	} else {
		return <div />;
	}
};

export default MenuBtn;
