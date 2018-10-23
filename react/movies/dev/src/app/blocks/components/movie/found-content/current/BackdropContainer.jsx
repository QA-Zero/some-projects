import React from 'react';

import '$a/styles#/movie/found-content/current/BackdropContainer.css';


const BackdropContainer = ({ bdImg, children }) => {
	const bdDetail = { background: `url("${bdImg}") center center / cover` };

	return (
		<div className="bdContainer">
			<div className="bdBase" style={ bdDetail } />
			<div className="content">{children}</div>
		</div>
	);
};


export default BackdropContainer;