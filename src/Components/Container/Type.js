import React from 'react';
import { NavLink } from 'react-router-dom';

const Type = ({ type, children }) => (
	<NavLink
		to={type === '/' ? '/BAR_GRAPH' : `/${type}`}
		activeStyle={{
			textDecoration: 'none',
			color: 'black'
		}}>
		{children}
	</NavLink>
);

export default Type;
