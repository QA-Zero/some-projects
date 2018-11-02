import { Route, Redirect } from 'react-router-dom';

import Start from '$cont/PageStart';
import List from '$comp/todo_list/PageTodoList';


const appRoutes = () => {
	const main = [
		{
			   action: Route,
			     path: '/',
			component: Start,
			    exact: true
		},
		{
			   action: Route,
			     path: '/list',
			component: List,
			    exact: true
		}
	];
	const support = [
		{
			action: Redirect,
			  from: '/*',
			    to: '/',
			 exact: false
		}
	];

	return main.concat(support);
};


export default appRoutes;