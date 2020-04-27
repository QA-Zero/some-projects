import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './app/blocks/components/MainApp.jsx'
import * as serviceWorker from './assets/serviceWorker.js'
import store from './app/logic/store_api/store/index.js'
import './assets/styles/libs/bootstrap (3.3.7)/css/bootstrap.min.css'
import './assets/styles/index.css'


const app = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
const root = document.getElementById('root');

ReactDOM.render(app, root);
serviceWorker.unregister();
