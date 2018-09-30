import { interim } from '../index.js';


export const auth       = state => interim(state).auth;
export const searchPage = state => interim(state).searchPage;