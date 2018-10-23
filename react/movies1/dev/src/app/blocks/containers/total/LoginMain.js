import { connect as reactConnect } from 'react-redux';
import { getLoggedIn } from '$a/tools#/store_api/selectors/session/index.js';
import { getLastPath } from '$a/tools#/store_api/selectors/interim/auth.js';
import { auth, replace } from '$a/tools#/store_api/actions/dispatchers.js';
import LoginMain from '$a/comp#/total/LoginMain.jsx';


const mapStateToProps = state => ({
	isLoggedIn: getLoggedIn(state),
	  lastPath: getLastPath(state)
});
const mapDispatchToProps = { auth, replace };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(LoginMain);