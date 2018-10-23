import { Route, Redirect } from 'react-router-dom';

import About from '$a/cont#/about/AboutMain.js';
import Search from '$a/cont#/search/SearchMain.js';
import Movie from '$a/cont#/movie/MovieMain.js';

import Login from '$a/cont#/total/LoginMain.js';
import NotFound from '$a/cont#/total/NotFound.js';

import checkAuth from '$a/hoc#/checkAuth.js';


const appRoutes = parentPath => {
	const main = [
		{
			action: Route,
			path: `${parentPath}/about`,
			component: About,
			exact: true
		},
		{
			action: Route,
			path: `${parentPath}/search`,
			component: Search,
			exact: true
		},
		{
			action: Route,
			path: `${parentPath}/movie/*`,
			component: checkAuth(Movie),
			exact: true
		}
	];
	const support = [
		{
			action: Route,
			path: `${parentPath}/login`,
			component: Login,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/login/*`,
			to: `${parentPath}/login`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/about/*`,
			to: `${parentPath}/about`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/search/*`,
			to: `${parentPath}/search`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/`,
			to: `${parentPath}/about`,
			exact: true
		},
		{
			action: Route,
			path: `${parentPath}/*`,
			component: NotFound,
			exact: false
		}
	];

	return main.concat(support);
};


export default appRoutes;