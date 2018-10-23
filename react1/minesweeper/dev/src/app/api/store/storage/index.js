import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { devTools, history } from './helpers.js';

import thunk from 'redux-thunk';
import rootReducer from '$store/reducers/index';


const configureStore = (initialState) => {
	const middlewares = [
		thunk,
		routerMiddleware(history)
	];
	const enhancers = [
		applyMiddleware(...middlewares),
		devTools()
	];

	return createStore(
		connectRouter(history)(rootReducer),
		initialState,
		compose(...enhancers)
	);
};


export default configureStore({});