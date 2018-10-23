import React from 'react';

import '$assets/styles/SingleUser.css';


export default ({ user }) => (
	<div className="user">
		<img src={user['photo']} alt="" />
		<div className="rightBlock">
			<div className="name">Name: {user['name']}</div>
			<div className="surname">Surname: {user['surname']}</div>
			<div className="desc">Desc: {user['desc']}</div>
		</div>
	</div>
);