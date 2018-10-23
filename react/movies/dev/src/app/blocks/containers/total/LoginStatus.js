import { connect as reactConnect } from 'react-redux';
import LoginStatus from '$a/comp#/total/LoginStatus.jsx';
import { getLoggedIn, getLogging, getError } from '$a/tools#/store_api/selectors/session/index.js';


const mapStateToProps = state => ({
	isLoggedIn: getLoggedIn(state),
	 isLogging: getLogging(state),
	     error: getError(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(LoginStatus);