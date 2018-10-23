import { RECEIVE_USERS } from '$const/actionTypes';


export default {
	getUsers: users => ({
		type: RECEIVE_USERS,
		users
	})
};