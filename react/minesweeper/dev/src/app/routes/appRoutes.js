import { Route, Redirect } from 'react-router-dom';

import Start from '$cont/start_page/StartPage';
import Game from '$cont/game_page/GamePage';


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
			     path: '/game',
			component: Game,
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