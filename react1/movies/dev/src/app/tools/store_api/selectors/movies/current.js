import { currentItem } from './total.js';


export const getTitle   = state => currentItem(state).title;
export const getDescr   = state => currentItem(state).descr;
export const getMainImg = state => currentItem(state).mainImg;
export const getBdImg   = state => currentItem(state).bdImg;