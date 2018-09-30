import React from 'react';
import { render } from 'react-dom';

import App from './app/blocks/containers/AppMain.js';
import registerServiceWorker from './assets/registerServiceWorker.js';
import { restoreAuth } from '$a/tools#/store_api/actions/dispatchers.js';
import store from '$a/tools#/store_api/store/index.js';

import './assets/styles/index.css';


const app = <App />;
const root = document.getElementById('root');


restoreAuth(
	() => {
		render(app, root);
		registerServiceWorker();
	},
	store.dispatch
);