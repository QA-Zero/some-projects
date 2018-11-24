import { composeWithDevTools } from 'redux-devtools-extension';


export const devTools = window.devToolsEnhancer || composeWithDevTools({
	    name: 'AppMainWrapper.appRoutes appRoutes',
	realtime: true,
	hostname: 'localhost',
	    port: 8000
});