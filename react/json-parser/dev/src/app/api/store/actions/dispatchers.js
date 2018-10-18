import { push as routerPush } from 'connected-react-router';
import receiveUsers from '$total/web';
import creators from './creators.js';


export const saveUsers = () => dispatch => {
	receiveUsers()
		.then(
			users => {
				dispatch(creators.getUsers(users));
			},
			error => {
				console.log( error );
			}
		);
};
export const push = path => dispatch => {
	dispatch(routerPush(path));
};