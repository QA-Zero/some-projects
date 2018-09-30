import { replace as routerReplace, push as routerPush } from 'connected-react-router';
import apiSearch from '../../api/search.js';
import { authorize, checkAuth } from '../../api/login.js';
import creators from './creators.js';
import { saveSession, extractSession } from '../../utils/session.js';


export const auth = (login, password) => dispatch => {
	dispatch(creators.authRequest());

	authorize(login, password)
		.then(
			data => {
				saveSession(data.token);
				dispatch(
					creators.authSuccess(data)
				)
			},
			error => {
				dispatch(
					creators.authFailure(error)
				)
			}
		);
};
export const restoreAuth = (callback, dispatch) => {
	const token = extractSession();

	if (token) {
		checkAuth(token)
			.then(
				data => {
					dispatch(
						creators.authSuccess(data)
					);
				},
				error => {
					dispatch(
						creators.authFailure(error)
					);
				}
			)
			.then(callback)
	}
	else {
		callback();
	}
};


export const saveMovieCurrent = id => dispatch => {
	dispatch(creators.fetchCurrentRequest());
	apiSearch
		.findSingleById(id)
		.then(answer => {
			dispatch(
				creators.fetchCurrentSuccess(answer)
			)
		});
};
export const saveMoviesSearch = query => dispatch => {
	dispatch(creators.fetchSearchRequest);
	apiSearch
		.findListByQuery(query)
		.then(answer => {
			dispatch(
				creators.fetchSearchSuccess(answer)
			)
		});
};
export const saveMoviesSimilar = id => dispatch => {
	dispatch(creators.fetchSimilarRequest());
	apiSearch
		.findListById(id)
		.then(answer => {
			dispatch(
				creators.fetchSimilarSuccess(answer)
			)
		});
};
export const saveMoviesRec = () => dispatch => {
	dispatch(creators.fetchRecRequest());
	apiSearch
		.findListRec()
		.then(answer => {
			dispatch(
				creators.fetchRecSuccess(answer)
			)
		});
};


export const saveSearchInfo = (userRequest, searchUrl) => dispatch => {
	dispatch(
		creators.setSearchInfo(userRequest, searchUrl)
	);
};
export const saveScroll = scroll => dispatch => {
	dispatch(
		creators.setScroll(scroll)
	);
};
export const savePathBeforeAuth = path => dispatch => {
	dispatch(
		creators.setPath(path)
	);
};


export const replace = path => dispatch => {
	dispatch(
		routerReplace(path)
	);
};
export const push = path => dispatch => {
	dispatch(
		routerPush(path)
	);
};