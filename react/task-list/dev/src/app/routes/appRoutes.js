import { Route, Redirect } from 'react-router-dom';
import TaskList from '$comp/task_list/content/index';
import AuthForm from '$comp/auth_form/index';

export default () => {
    const main = [
        {
            action: Route,
            path: '/',
            component: TaskList,
            exact: true
        },
        {
            action: Route,
            path: '/auth',
            component: AuthForm,
            exact: true
        }
    ];
    const support = [
        {
            action: Redirect,
            from: '/*',
            to: '/',
            exact: false
        }
    ];

    return main.concat(support);
};
