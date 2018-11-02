import { INIT_CURRENT_LIST } from '$const/actionTypes';


export default {
	initCurrentList: tasks => ({
		type: INIT_CURRENT_LIST,
		tasks
	}),
};