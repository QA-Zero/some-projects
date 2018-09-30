import { Route, Redirect } from 'react-router-dom';

import Current from '$a/cont#/movie/found-content/current/CurrentMain.js';
import Similar from '$a/cont#/movie/found-content/similar/SimilarMain.js';
import Recommendations from '$a/cont#/movie/found-content/rec/RecMain.js';


const movieRoutes = parentPath => {
	const main = [
		{
			action: Route,
			path: `${parentPath}/current/:id`,
			component: Current,
			exact: true
		},
		{
			action: Route,
			path: `${parentPath}/similar/:id`,
			component: Similar,
			exact: true
		},
		{
			action: Route,
			path: `${parentPath}/rec`,
			component: Recommendations,
			exact: false
		}
	];
	const support = [
		{
			action: Redirect,
			from: `${parentPath}`,
			to: `/`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/current`,
			to: `/`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/similar`,
			to: `/`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/:id`,
			to: `${parentPath}/current/:id`,
			exact: true
		},
		{
			action: Redirect,
			from: `${parentPath}/rec/*`,
			to: `${parentPath}/rec`,
			exact: false
		}
	];

	return main.concat(support);
};


export default movieRoutes;