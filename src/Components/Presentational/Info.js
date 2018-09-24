import React from 'react';

const styles = {
	main: {
		display: 'flex',
		textAlign: 'center',
		justifyContent: 'space-around',
		paddingBottom: '10%'
	}
};

const Info = () => {
	return (
		<div style={styles.main}>
			<p>
				This is a sample data visualization. It's quite a step up from my
				previous meager attempt at using d3.
			</p>
			<br />
		</div>
	);
};

export default Info;
