import { Component } from 'react';
import { connect as reactConnect } from 'react-redux';

import store from '$a/tools#/store_api/store/index.js';
import { getUrlFull } from '$a/tools#/store_api/selectors/location/index.js';
import { replace, savePathBeforeAuth } from '$a/tools#/store_api/actions/dispatchers.js';


const checkAuth = BaseComponent => {
	class ReplaceComponent extends Component {
		componentDidMount() {
			const {
				currentPath,
				newPath,
				replace,
				savePathBeforeAuth
			} = this.props;

			savePathBeforeAuth(currentPath);
			replace(newPath);
		}

		render() {
			return '';
		}
	}

	const mapStateToProps = state => ({
		currentPath: getUrlFull(state),
		    newPath: '/login'
	});
	const mapDispatchToProps = { replace, savePathBeforeAuth };
	const connect = reactConnect(mapStateToProps, mapDispatchToProps);
	const isLoggedIn = store.getState().session.isLoggedIn;


	return isLoggedIn
		? BaseComponent
		: connect(ReplaceComponent)
	;
};


export default checkAuth;