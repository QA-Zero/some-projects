import { push as routerPush } from 'connected-react-router';
import creators from './creators.js';


export const initBoardParams = boardParams => dispatch => {
	dispatch(creators.initBoardParams(boardParams));
};
export const startGame = () => dispatch => {
	dispatch(creators.startGame());
};
export const flagToggle = tileIndex => dispatch => {
	dispatch(creators.flagToggle(tileIndex));
};
export const checkTile = tileIndex => dispatch => {
	dispatch(creators.checkTile(tileIndex));
	dispatch(creators.updateCheckedTiles(tileIndex));
};
export const push = path => dispatch => {
	dispatch(routerPush(path));
};