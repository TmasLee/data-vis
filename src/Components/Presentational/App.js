import React from 'react';

import Info from './Info';
import GraphTypeSelector from './GraphTypeSelector';
import GraphContainer from '../Container/GraphContainer';
import MenuContainer from '../Container/MenuContainer';

/**
 * To Add:
 * -	Zoomable y axis? Scatter scalable x?
 */

const App = ({ match }) => {
	const type = match.params.type || 'BAR_GRAPH';
	return (
		<div>
			<Info type={type} />
			<GraphContainer type={type} />
			<ul id="menu">
				<li>
					<GraphTypeSelector />
				</li>
				<li>
					<MenuContainer type={type} />
				</li>
			</ul>
		</div>
	);
};

export default App;
