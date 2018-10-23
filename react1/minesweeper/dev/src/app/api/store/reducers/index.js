import { combineReducers } from 'redux';
import params from './params.js';
import game from './game.js';


export default combineReducers({ params, game });