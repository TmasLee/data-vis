import React from 'react';
import { GraphType } from '../../Actions';

const Info = ({ type }) => {
	const { BAR_GRAPH, SCATTER_PLOT, DONUT_CHART } = GraphType;
	if (type === BAR_GRAPH) {
		return (
			<div>
				<p>
					This is a sample data visualization. It's quite a step up from my
					previous attempt at using d3 as the app is responsive to resizing the
					window, the D3 usage is cleaner and more cohesive, and the React
					components are more modular. I used the same tooltip component for all
					the graphs and share the same Y-axis for both the bar and scatter
					plot. <br />
					<br />
					This bar graph displays the power levels among Dr. Strange characters.
					Click the other links to see the other graphs.
				</p>
			</div>
		);
	} else if (type === SCATTER_PLOT) {
		return (
			<div>
				<p>
					This graph is a plot of actual lab data that I collected in one of my
					upper level chemistry lab college courses.
					<br />
					<br />
					In this experiment, we studied Beer's Law, A = -log(I/I0) where A is
					the absorbance of a solution, I is the light intensity, and I0 is the
					initial intensity. This graph plots different wavelengths of light vs
					the light intensity of the light exiting the solution. In this
					experiment, we tested 2 separate chemicals with multiple trials. You
					can choose between Holmium and KMnO4 (otherwise known as potassium
					permanganate).
				</p>
				<br />
			</div>
		);
	} else if (type === DONUT_CHART) {
		return (
			<div>
				<p>
					This is just random "data" presented as a Donut Chart. Next visuals
					are going to be implemented and designed using with a test driven
					approach using Jest. Also gonna add real reusable presentational
					components (buttons, axes, etc...). <br />
					<br />
					For the bar and scatter plot, I designed the reusability of the axes
					in the wrong way. I made the axes component the parent when I wanted
					to make the bar and scatter plot the parent components reusing the
					same axes component 😅.
				</p>
			</div>
		);
	} else {
		return;
	}
};

export default Info;
