import { connect as reactConnect } from 'react-redux';
import { getUsers } from '$store/selectors/index';
import { saveUsers } from '$store/actions/dispatchers';
import { getPageNumber, savePageNumber } from '$total/browser';
import UsersPage from '$comp/users_page/UsersPage';


const mapStateToProps = state => ({
	     users: getUsers(state),
	pageNumber: getPageNumber(),
	savePageNumber
});
const mapDispatchToProps = {saveUsers};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(UsersPage);