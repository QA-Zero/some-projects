import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from '$a/tools#/store_api/store/index.js';
import { history } from '$a/tools#/store_api/store/helpers.js';

import Routes from '$a/routes#/index.js';
import appRoutes from '$a/routes#/appRoutes.js';


const BaseRouting = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes
				urls={appRoutes}
				parentPath=""
			/>
		</ConnectedRouter>
	</Provider>
);


export default BaseRouting;