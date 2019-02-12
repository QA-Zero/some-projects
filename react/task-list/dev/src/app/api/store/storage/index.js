import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { devTools, history } from './dev_tools';
import thunk from 'redux-thunk';
import createRootReducer from '$store/reducers/index';

const configureStore = (initialState) => {
	const middleWares = [
		thunk,
        routerMiddleware(history)
	];
	const enhancers = [
		applyMiddleware(...middleWares),
        devTools()
	];

	return createStore(
        createRootReducer(history),
		initialState,
		compose(...enhancers)
	);
};

export default configureStore({});
