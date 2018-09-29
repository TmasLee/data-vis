import React from 'react';
import MenuBtn from './MenuBtn';

const Menu = ({ ...props }) => {
	return (
		<div>
			<MenuBtn {...props} />
		</div>
	);
};

export default Menu;
