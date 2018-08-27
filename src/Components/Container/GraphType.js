import React from 'react';
import {NavLink} from 'react-router-dom';

const GraphType = ({type, children}) => (
  <NavLink
    to={type === 'SHOW_ALL' ? '/' : `/${type}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default GraphType;