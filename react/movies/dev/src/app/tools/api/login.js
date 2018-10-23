import jwt from 'jsonwebtoken';
import users from '../const/users.js';


const SALT = 'react';

export const authorize = (login, password) => new Promise(
	(resolve, reject) => {
		const isUser = users.find(
			user => user.login === login
		);

		if (isUser) {
			const isPass = users.find(
				user => user.password === password
			);

			if (isPass) {
				const userInfo = {
					name: isUser.name,
					avatar: isUser.avatar,
					login: isUser.login
				};

				resolve({
					userInfo,
					token: jwt.sign(userInfo, SALT)
				});
			}
			else {
				reject('Password is wrong');
			}
		}
		else {
			reject('Unknown login');
		}
	}
);

export const checkAuth = token => new Promise(
	(resolve, reject) => {
		if (token) {
			const decodedUser = jwt.decode(token, SALT);
			const logedInUser = users.find(
				user => user.login === decodedUser.login
			);

			if (logedInUser) {
				const userInfo = {
					name: logedInUser.name,
					avatar: logedInUser.avatar,
				};

				return resolve(userInfo);
			}
			else {
				return reject('User dois not exist');
			}
		}
		else {
			return reject('User is not authentificated');
		}
	}
);