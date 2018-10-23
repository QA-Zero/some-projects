import { auth } from './total.js';


export const getLastPath = state => auth(state).lastPath;