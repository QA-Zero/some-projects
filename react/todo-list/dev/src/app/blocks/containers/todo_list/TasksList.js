import { connect as reactConnect } from 'react-redux';
import { listInit } from '$store/actions/dispatchers';
import { getTasks } from '$store/selectors/index';
import List from '$comp/todo_list/TasksList';


const mapStateToProps = state => ({
	tasks: getTasks(state),
});
const mapDispatchToProps = {listInit};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(List);