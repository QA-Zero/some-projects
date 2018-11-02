import { push as routerPush } from 'connected-react-router';
import { getStartList, getUpdatedList } from '$server/index';
import creators from './creators.js';


export const listInit = () => dispatch => {
	const longPolling = () => {
		getUpdatedList()
			.then(
				tasks => {
					dispatch(creators.initCurrentList(tasks));
					longPolling();
				}
			);
	};

	getStartList()
		.then(
			tasks => {
				dispatch(creators.initCurrentList(tasks));
			}
		);
	longPolling();
};
export const push = path => dispatch => {
	dispatch(routerPush(path));
};