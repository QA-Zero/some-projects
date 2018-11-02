import React from 'react';

import Button from '@material-ui/core/Button';

import '$assets/styles/PageStart.css';


export default ({ push }) => {
	const handleClick = () => {
		push('/list');
	};

	return <Button	className="btnShow" onClick={handleClick}>Show list</Button>;
}