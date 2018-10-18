import React from 'react';

import User from './SingleUser';

import '$assets/styles/UsersList.css';


export default ({ usersList }) => (
	<div className="list">
		{
			usersList.map(
				user => <User
					key={user.id}
					user={user}
				/>
			)
		}
	</div>
);