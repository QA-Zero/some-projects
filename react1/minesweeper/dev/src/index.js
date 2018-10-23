import React from 'react';
import { render } from 'react-dom';
import App from './app/blocks/AppMain.js';
import '$assets/styles/index.css';


const app = <App />;
const root = document.getElementById('root');

render(app, root);