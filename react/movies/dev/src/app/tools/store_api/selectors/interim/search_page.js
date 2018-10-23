import { searchPage } from './total.js';


export const getScroll      = state => searchPage(state).scroll;
export const getUserRequest = state => searchPage(state).userRequest;
export const getSearchUrl   = state => searchPage(state).searchUrl;