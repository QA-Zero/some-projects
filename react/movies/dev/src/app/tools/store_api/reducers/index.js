import { combineReducers } from 'redux';

import interimParams from './interim_params.js';
import session from './session.js';
import movies from './movies.js';


export default combineReducers({
	movies,
	session,
	interimParams
});