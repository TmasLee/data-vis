import React from 'react';
import { NavLink } from 'react-router-dom';

const Type = ({ type, children }) => (
	<NavLink
		to={type === '' ? '/' : `/${type}`}
		activeStyle={{
			textDecoration: 'none',
			color: 'black'
		}}
	>
		{children}
	</NavLink>
);

export default Type;
