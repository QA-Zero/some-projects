import { LOGIN } from '$const/actionTypes';
import { push as routerPush } from 'connected-react-router';
import { connect as reactConnect } from 'react-redux';
import { getStatus } from '$store/selectors/index';
import AuthForm from './AuthForm';

const mapStateToProps = state => ({
    isAdmin: getStatus(state)
});
const mapDispatchToProps = {
    push: path => dispatch => {
        dispatch(routerPush(path));
    },
    login: () => dispatch => {
        dispatch({ type: LOGIN });
    }
};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(AuthForm);
