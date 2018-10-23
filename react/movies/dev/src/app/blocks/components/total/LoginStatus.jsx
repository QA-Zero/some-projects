import React from 'react';

import '$a/styles#/total/LoginStatus.css';


const LoginStatus = ({ isLogging, isLoggedIn, error }) => (
	isLogging
		? <div className="status">Logging...</div>
		: (
			isLoggedIn
			? ''
			: <div className="status">{error}</div>
		)
);


export default LoginStatus;