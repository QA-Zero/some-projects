import { connect as reactConnect } from 'react-redux';
import { deleteTask, doneTask, updateTask } from '$server/index';
import SingleTask from '$comp/todo_list/SingleTask';


const mapStateToProps = () => ({ deleteTask, doneTask, updateTask });
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(SingleTask);