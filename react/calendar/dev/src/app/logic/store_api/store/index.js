import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';


const configureStore = () => {
	const devTools       = window.devToolsEnhancer || composeWithDevTools({
		name    : 'AppMainWrapper.appRoutes appRoutes',
		realtime: true,
		hostname: 'localhost',
		port    : 8000
	});
	const enhancersList  = [
		applyMiddleware(thunk),
		devTools()
	];
	// noinspection JSCheckFunctionSignatures
	const enhancers = compose(...enhancersList);

	return createStore(rootReducer, {}, enhancers);
};


export default configureStore();
