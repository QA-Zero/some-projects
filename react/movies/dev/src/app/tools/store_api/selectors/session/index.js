import { session } from '../index.js';


export const getLoggedIn = state => session(state).isLoggedIn;
export const getLogging  = state => session(state).isLogging;
export const getError    = state => session(state).error;