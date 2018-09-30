import React from 'react';

import Info from './Info';
import GraphTypeSelector from './GraphTypeSelector';
import GraphContainer from '../Container/GraphContainer';
import MenuContainer from '../Container/MenuContainer';

const style = {
	app: {
		display: 'flex',
		height: '98vh',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	menu: {
		display: 'flex',
		width: '35%',
		justifyContent: 'space-between'
	}
};

/**
 * To Add:
 * -	Zoomable y axis? Scatter scalable x?
 */

const App = ({ match }) => {
	const type = match.params.type || 'BAR_GRAPH';
	return (
		<div style={style.app}>
			<Info type={type} />
			<GraphContainer style={style.graphContainer} type={type} />
			<div style={style.menu}>
				<GraphTypeSelector />
				<MenuContainer type={type} />
			</div>
		</div>
	);
};

export default App;
