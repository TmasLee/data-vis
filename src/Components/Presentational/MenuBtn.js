import React from 'react';

const MenuBtn = ({ item }) => {
	return (
		<button
			onClick={e => {
				e.preventDefault();
				item.func();
			}}>
			{item.name}
		</button>
	);
};

export default MenuBtn;
