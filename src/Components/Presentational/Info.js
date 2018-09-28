import React from 'react';

const styles = {
	main: {
		display: 'flex',
		textAlign: 'center',
		justifyContent: 'space-around'
	}
};

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
			<div style={styles.main}>
				<p>
					This graph is a plot of actual lab data that I collected in one of my
					upper level chemistry lab college courses. Click the button to see the
					raw collected data. <br />
					<br />
					This graph plots __ wavelength vs light intensity.
					__Explain_what_lab_was_ about__. In this experiment, we tested 2
					separate chemicals with multiple trials. You can choose between
					Holmium and KMnO4 (otherwise known as potassium permanganate).
				</p>
				<br />
			</div>
		);
	} else {
		return <div>This is for pie.</div>;
	}
};

export default Info;
