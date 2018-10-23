import React from 'react';

import Button from '@material-ui/core/Button';

import '$assets/styles/StartPage.css';


export default ({ saveUsers, setPageDefault, push }) => {
	const handleClick = () => {
		saveUsers();
		setPageDefault();
		push('/users');
	};

	return (
		<Button
			className="btn"
			onClick={handleClick}
		>Get users</Button>
	);
}