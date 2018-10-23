import React from 'react';

import emoji from '$const/emoji';

import '$assets/styles/total/Emoji.css';


export default ({ size, type }) => {
	return (
		<span
			className={`emoji emoji-${type}`}
			style={{ fontSize: `${size}pt` }}
		>{emoji[type].value}</span>
	)
};