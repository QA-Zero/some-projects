import creators from './creators.js';


export const setMode = mode => dispatch => {
	dispatch(
		creators.setMode(mode)
	);
};
