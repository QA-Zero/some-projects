import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

export const devTools = window.devToolsEnhancer || composeWithDevTools({
	    name: 'AppMainWrapper.appRoutes appRoutes',
	realtime: true,
	hostname: 'localhost',
	    port: 8000
});
export const history = createBrowserHistory();
