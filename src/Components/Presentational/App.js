import React from 'react';

import Info from './Info';
import GraphTypeSelector from './GraphTypeSelector';
import GraphContainer from '../Container/GraphContainer';
import MenuContainer from '../Container/MenuContainer';
import { GraphType } from '../../Actions';

const App = ({ match }) => {
	const type = match.params.type || GraphType.BAR_GRAPH;
	return (
		<div>
			<Info type={type} />
			<nav>
				<ul>
					<li>
						<GraphTypeSelector />
					</li>
					<li>
						<MenuContainer type={type} />
					</li>
				</ul>
			</nav>
			<GraphContainer type={type} />
		</div>
	);
};

export default App;
