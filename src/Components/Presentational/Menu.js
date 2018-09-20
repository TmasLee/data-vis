import React from 'react';
import MenuBtn from './MenuBtn';

const Menu = ({ items }) => {
	return (
		<div>
			{items.map((item, i) => {
				return <MenuBtn key={i} item={item} />;
			})}
		</div>
	);
};

export default Menu;
