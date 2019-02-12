import { ADD_TASK, EDIT_TASK_NAME, DONE_TASK, UNDONE_TASK, LOGOUT } from '$const/actionTypes';
import { connect as reactConnect } from 'react-redux';
import { getStatus, getTaskList } from '$store/selectors/index';
import { push as routerPush } from 'connected-react-router';
import Content from './Content';

const mapStateToProps = state => ({
     isAdmin: getStatus(state),
    taskList: getTaskList(state),
});
const mapDispatchToProps = {
    addTask: (email, userName, taskName) => dispatch => {
        dispatch({
            type: ADD_TASK,
            value: {
                userName,
                email,
                taskName,
            },
        });
    },
    editTask: (index, newTaskName, status) => dispatch => {
        dispatch({
            type: EDIT_TASK_NAME,
            value: { index, newTaskName },
        });

        if (status) {
            dispatch({
                type: DONE_TASK,
                value: { index, status },
            });
        } else {
            dispatch({
                type: UNDONE_TASK,
                value: { index, status },
            });
        }
    },
    logout: () => dispatch => {
        dispatch({ type: LOGOUT });
    },
    push: path => dispatch => {
        dispatch(routerPush(path));
    },
};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(Content);
