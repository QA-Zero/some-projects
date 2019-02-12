import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import taskList from './tasks';
import auth from './auth';

export default history => combineReducers({
    router: connectRouter(history),
    taskList,
    auth
});
