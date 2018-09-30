import { location } from '../index.js';


export const getUrlBase  = state => location(state).pathname;
export const getUrlQuery = state => location(state).search;
export const getUrlFull  = state => getUrlBase(state) + getUrlQuery(state);
export const getUrlId    = state => {
	const urlParts = getUrlBase(state).split('/');
	let id = urlParts[urlParts.length - 1];

	if (!parseInt(id, 10)) {
		id = '';
	}

	return id;
};