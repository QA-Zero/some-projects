export const saveSession = token => {
	try {
		localStorage.setItem('session', token);
	} catch(err) {
		console.log( err );
	}
};

export const extractSession = () => {
	try {
		return localStorage.getItem('session');
	} catch(err) {
		console.log( err );
	}
};

export const clearSession = () => {
	try {
		localStorage.setItem('session', '');
	} catch(err) {
		console.log( err );
	}
};