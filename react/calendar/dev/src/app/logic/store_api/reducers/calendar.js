const initialState = {
	mode: 'month',
};


export default (state = initialState, { type, values }) => {
	switch (type) {
		case 'SET_MODE': {
			return {
				...state,
				mode: values.mode,
			};
		}		

		default: {
			return state
		}
	}
};
