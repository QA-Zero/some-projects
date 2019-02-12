import { ADD_TASK, DELETE_TASK, EDIT_TASK_NAME, DONE_TASK, UNDONE_TASK } from '$const/actionTypes';
import tasks from '$const/defaultTasks';

export default (
    state  = { tasks, lastId: tasks.length },
    action = {}
) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                tasks: [
                    ...state.tasks,
                    {
                              id: state.lastId + 1,
                           email: action.value.email,
                        userName: action.value.userName,
                        taskName: action.value.taskName,
                          status: false,
                    }
                ],
                lastId: state.lastId + 1
            };
        }
        case EDIT_TASK_NAME: {
            state.tasks[action.value.index].taskName = action.value.newTaskName;
            return state;
        }
        case DONE_TASK: {
            state.tasks[action.value.index].status = true;
            return state;
        }

        case UNDONE_TASK: {
            state.tasks[action.value.index].status = false;
            return state;
        }
        case DELETE_TASK: {
            state.tasks[action.value.index].splice(action.value.index, 1);
            return state;
        }

        default: return state;
    }
};
