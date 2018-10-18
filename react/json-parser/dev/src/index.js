import React from 'react';
import { render } from 'react-dom';
import App from './app/blocks/AppMain';
import '$assets/styles/index.css';


document.body.innerHTML = '<div id="app"></div>';
render(
	<App />, 
	document.getElementById('app')
);