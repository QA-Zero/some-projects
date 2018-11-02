const protocol = 'http://';
const domain = 'kspace-mailer.hol.es';
const path = '/';
const HOST = protocol + domain + path;

const saveOnServer = obj => {
	const data = new FormData();
	data.append(
		'data',
		JSON.stringify(obj)
	);

	const url = HOST + 'server_setter.php';
	const params = {
		method: 'POST',
		body: data
	};

	fetch(url, params)
		.then(
			response => response.text()
		)
		.catch(
			error => { console.log('There has been a problem with your fetch operation: ' + error.message);	}
		);
};


export const getStartList = () => (
	fetch(HOST + 'server_getter.php')
		.then(
			response => response.json()
		)
		.catch(
			error => { console.log('There has been a problem with your fetch operation: ' + error.message);	}
		)
);
export const getUpdatedList = () => {
	const data = new FormData();
	data.append(
		'time',
		JSON.stringify(+new Date())
	);

	const url = HOST + 'long_polling.php';
	const params = {
		method: 'POST',
		body: data
	};

	return fetch(url, params)
		.then(
			response => response.json()
		)
		.catch(
			error => { console.log('There has been a problem with your fetch operation: ' + error.message);	}
		);
};
export const updateTask = (id, value) => {
	saveOnServer({
		action: 'update_task',
		id,
		value
	});
};
export const addNewTask = value => {
	saveOnServer({
		action: 'add_task',
		value
	});
};
export const deleteTask = id => {
	saveOnServer({
		action: 'delete_task',
		id
	});
};
export const doneTask = id => {
	saveOnServer({
		action: 'done_task',
		id
	});
};