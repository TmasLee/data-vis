import React from 'react';
import MenuBtn from './MenuBtn';

const Menu = ({ type, display }) => {
	return (
		<div>
			<MenuBtn type={type} display={display} />
		</div>
	);
};

export default Menu;
