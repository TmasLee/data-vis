import React from 'react';

const Btn = ({ onClick, style, children }) => (
	<button
		style={style}
		onClick={e => {
			e.preventDefault();
			onClick();
		}}>
		{children}
	</button>
);

export default Btn;
