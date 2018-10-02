import React from 'react';

const Info = ({ type }) => {
	if (type === 'BAR_GRAPH') {
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
	} else if (type === 'LINE_GRAPH') {
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
	} else {
		return <div>This is for pie.</div>;
	}
};

export default Info;
