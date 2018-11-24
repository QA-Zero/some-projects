import { createStore, applyMiddleware, compose } from 'redux';
import { devTools } from './dev_tools.js';
import thunk from 'redux-thunk';
import rootReducer from '$store/reducers/index';


const configureStore = (initialState) => {
	const middlewares = [ thunk	];
	const enhancers = [
		applyMiddleware(...middlewares),
        devTools()
	];

	return createStore(
        rootReducer,
		initialState,
		compose(...enhancers)
	);
};


export default configureStore({});