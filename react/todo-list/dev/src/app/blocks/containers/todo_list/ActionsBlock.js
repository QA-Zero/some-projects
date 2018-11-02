import { connect as reactConnect } from 'react-redux';
import { addNewTask } from '$server/index';
import Actions from '$comp/todo_list/ActionsBlock';


const mapStateToProps = () => ({ addNewTask });
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(Actions);