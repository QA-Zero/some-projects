import { Route, Redirect } from 'react-router-dom';

import Start from '$cont/StartPage';
import Users from '$cont/UsersPage';


const appRoutes = () => {
	const main = [
		{
			   action: Route,
			     path: '/start',
			component: Start,
			    exact: true
		},
		{
			   action: Route,
			     path: '/users',
			component: Users,
			    exact: true
		}
	];
	const support = [
		{
			action: Redirect,
			from: '/',
			to: 'start',
			exact: false
		}
	];

	return main.concat(support);
};


export default appRoutes;