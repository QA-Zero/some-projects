import React from 'react';
import { NavLink } from 'react-router-dom';

import '$a/styles#/movie/navigation/Tab.css';


const Tab = ({ url, name }) => (
	<NavLink
		to={url}
		className={`tab`}
		activeClassName={`active`}
	>{name}</NavLink>
);


export default Tab;