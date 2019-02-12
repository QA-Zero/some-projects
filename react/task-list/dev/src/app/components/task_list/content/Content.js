import React, { PureComponent, createRef } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import SingleTask from '../single_task/SingleTask';
import Pagination from 'react-js-pagination';
import Checkbox from '@material-ui/core/Checkbox';
import '$assets/styles/Content.scss';

const PER_PAGE = 3;

export default class Content extends PureComponent {
    getCurrentList = activePage => {
        const { listFull } = this.state.other;
        const temp = PER_PAGE * activePage - 1;
        const firstIndex = PER_PAGE * (activePage - 1);
        const lastIndex = listFull.length >= temp ? temp : listFull.length - 1;

        return listFull.slice(firstIndex, lastIndex + 1);
    };

    getCurrentIndex = indexOnPage => {
        const { activePage } = this.state.other;
        return (activePage - 1) * PER_PAGE + indexOnPage;
    };

    getArrowClass = () => {
        let getClass = param => {
            switch (param) {
                case 'default': return 'arrow-default';
                case 'top':     return 'arrow arrow-top';
                case 'bottom':  return 'arrow arrow-bottom';
                default: return '';
            }
        };
        const { userName, email, status } = this.state.sort;

        return {
            userName: getClass(userName),
               email: getClass(email),
              status: getClass(status),
        };
    };

    getArrowStatus = param => {
        switch (param) {
            case 'default': return 'top';
            case 'bottom':  return 'top';
            case 'top':     return 'bottom';
            default: return '';
        }
    };

    handleEmailChange = e => {
        let allFilled =
            e.target.value
            &&
            this.userNameRef.current.props.value
            &&
            this.taskNameAddRef.current.props.value
        ;

        if (allFilled) {
            this.setState({
                fields: {
                    ...this.state.fields,
                    emailField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    addFieldsEmpty: false,
                },
            });
        }
        else {
            this.setState({
                fields: {
                    ...this.state.fields,
                    emailField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    addFieldsEmpty: true,
                },
            });
        }
    };

    handleUserNameChange = e => {
        let allFilled =
            this.emailRef.current.props.value
            &&
            e.target.value
            &&
            this.taskNameAddRef.current.props.value
        ;

        if (allFilled) {
            this.setState({
                fields: {
                    ...this.state.fields,
                     userNameField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    addFieldsEmpty: false,
                },
            });
        }
        else {
            this.setState({
                fields: {
                    ...this.state.fields,
                     userNameField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    addFieldsEmpty: true,
                },
            });
        }
    };

    handleTaskNameAddChange = e => {
        let allFilled =
            this.emailRef.current.props.value
            &&
            this.userNameRef.current.props.value
            &&
            e.target.value
        ;

        if (allFilled) {
            this.setState({
                fields: {
                    ...this.state.fields,
                    taskNameAddField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    addFieldsEmpty: false,
                },
            });
        }
        else {
            this.setState({
                fields: {
                    ...this.state.fields,
                    taskNameAddField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    addFieldsEmpty: true,
                },
            });
        }
    };

    handleTaskNameEditChange = e => {
        if (e.target.value) {
            this.setState({
                fields: {
                    ...this.state.fields,
                    taskNameEditField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    editFieldsEmpty: false,
                },
            });
        }
        else {
            this.setState({
                fields: {
                    ...this.state.fields,
                    taskNameEditField: e.target.value,
                },
                other: {
                    ...this.state.other,
                    editFieldsEmpty: true,
                },
            });
        }
    };

    handleEditTaskStart = editingIndex => {
        const { listFull } = this.state.other;
        this.setState({
            fields: {
                ...this.state.fields,
                taskNameEditField: listFull[editingIndex].taskName,
                      isDoneField: listFull[editingIndex].status,
            },
            other: {
                ...this.state.other,
                editingIndex,
            },
        });
    };

    handleEditTaskFinish = () => {
        const { editTask } = this.props;
        const { editingIndex } = this.state.other;

        editTask(
            editingIndex,
            this.taskNameEditRef.current.props.value,
            this.doneRef.current.props.checked
        );
        this.setState({
            fields: {
                ...this.state.fields,
                taskNameEditField: '',
            },
            other: {
                ...this.state.other,
                editingIndex: -1,
            },
        });
    };

    handleKeyDownAdd = e => {
        const { addFieldsEmpty } = this.state.other;

        if (e.keyCode === 13) {
            if (!addFieldsEmpty) {
                this.handleAddTask();
            }
        }
    };

    handleKeyDownEdit = e => {
        const { editFieldsEmpty } = this.state.other;

        if (e.keyCode === 13) {
            if (!editFieldsEmpty) {
                this.handleEditTaskFinish();
            }
        }
    };

    handleDoneChange = e => {
        this.setState({
            fields: {
                ...this.state.fields,
                isDoneField: e.target.checked
            }
        });
    };

    handleLogout = () => {
        const { logout } = this.props;
        logout();
    };

    handleLogin = () => {
        const { push } = this.props;
        push('/auth');
    };

    handleAddTask = () => {
        const { addTask } = this.props;

        addTask(
            this.emailRef.current.props.value,
            this.userNameRef.current.props.value,
            this.taskNameAddRef.current.props.value
        );
        this.setState({
            fields: {
                ...this.setState.fields,
                      emailField: '',
                   userNameField: '',
                taskNameAddField: '',
            },
            other: {
                ...this.state.other,
                addFieldsEmpty: true,
            },
        });
    };

    handlePageChange = activePage => {
        this.setState({
            other: {
                ...this.state.other,
                activePage,
                listOnCurrentPage: this.getCurrentList(activePage),
            }
        });
    };

    getListFullSorted = key => {
        const { listFull } = this.state.other;
        const param = this.state.sort[key];

        listFull.sort(
            (a, b) => {
                let cond = (param === 'top') ? (b[key] > a[key]) : (a[key] > b[key]);

                if (cond) return 1;
                else return -1;
            }
        );

        return listFull;
    };

    handleSortUsername = () => {
        const { userName } = this.state.sort;

        this.setState({
            sort: {
                userName: this.getArrowStatus(userName),
                   email: 'default',
                  status: 'default',
            }
        });
        this.updateLists(
            this.getListFullSorted('userName')
        )
    };

    handleSortEmail = () => {
        const { email } = this.state.sort;

        this.setState({
            sort: {
                userName: 'default',
                email: this.getArrowStatus(email),
                status: 'default',
            }
        });
        this.updateLists(
            this.getListFullSorted('email')
        )
    };

    handleSortStatus = () => {
        const { status } = this.state.sort;

        this.setState({
            sort: {
                userName: 'default',
                email: 'default',
                status: this.getArrowStatus(status),
            }
        });
        this.updateLists(
            this.getListFullSorted('status')
        )
    };

    updateLists = taskList => {
        const { activePage } = this.state.other;

        this.setState(
            {
                other: {
                    ...this.state.other,
                    listFull: taskList,
                }
            },
            () => {
                this.setState({
                    other: {
                        ...this.state.other,
                        listOnCurrentPage: this.getCurrentList(activePage),
                    }
                });
            }
        );
    };

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                       emailField: '',
                    userNameField: '',
                 taskNameAddField: '',
                taskNameEditField: '',
                      isDoneField: false,
            },
            sort: {
                userName: 'default',
                   email: 'default',
                  status: 'default',
            },
            other: {
                         listFull: props.taskList,
                listOnCurrentPage: [],
                       activePage: 1,
                     editingIndex: -1,
                   addFieldsEmpty: true,
                  editFieldsEmpty: false,
            },
        };
        this.emailRef = createRef();
        this.taskNameAddRef = createRef();
        this.userNameRef = createRef();
        this.taskNameEditRef = createRef();
        this.doneRef = createRef();
    }

    componentDidMount() {
        this.updateLists(this.props.taskList);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.taskList.length !== prevProps.taskList.length) {
            this.updateLists(this.props.taskList);
        }
    }

    render() {
        const { isAdmin } = this.props;
        const {
            emailField,
            userNameField,
            taskNameAddField,
            taskNameEditField,
            isDoneField,
        } = this.state.fields;
        const {
            listFull,
            listOnCurrentPage,
            activePage,
            editingIndex,
            addFieldsEmpty,
            editFieldsEmpty,
        } = this.state.other;

        const isEditing = editingIndex > -1;
        const isAddBlock = isAdmin ? !isEditing : true;
        const arrowClass = this.getArrowClass();

        return (
            <div className="content">
                <div className="auth-panel">
                    {
                        isAdmin
                            ? (
                                <Button
                                    className="btn logout-btn"
                                    disabled={isEditing}
                                    onClick={this.handleLogout}
                                >Logout</Button>
                            )
                            : (
                                <Button
                                    className="btn login-btn"
                                    disabled={isEditing}
                                    onClick={this.handleLogin}
                                >Login</Button>
                            )
                    }
                </div>
                <div className="main-panel">
                    <div className="sort-panel">
                        <div className="sort sort-username" onClick={this.handleSortUsername}>
                            <div className={arrowClass.userName} />
                        </div>
                        <div className="sort sort-email" onClick={this.handleSortEmail}>
                            <div className={arrowClass.email} />
                        </div>
                        <div className="sort sort-status" onClick={this.handleSortStatus}>
                            <div className={arrowClass.status} />
                        </div>
                    </div>
                    <div className="list">
                        {
                            listOnCurrentPage
                                ? (
                                    listOnCurrentPage.map(
                                        (task, index) => (
                                            <SingleTask
                                                key={this.getCurrentIndex(index)}
                                                index={this.getCurrentIndex(index)}
                                                isAdmin={isAdmin}
                                                email={task.email}
                                                userName={task.userName}
                                                taskName={task.taskName}
                                                status={task.status}
                                                editTaskStart={this.handleEditTaskStart}
                                            />
                                        )
                                    )
                                )
                                : false
                        }

                    </div>
                    <Pagination
                        hideDisabled
                        activePage={activePage}
                        itemsCountPerPage={PER_PAGE}
                        totalItemsCount={listFull.length}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange}
                    />
                </div>
                {
                    isAddBlock
                        ? (
                            <div className="bottom add-task">
                                <TextField
                                    className="field email"
                                    value={emailField}
                                    helperText="Email"
                                    ref={this.emailRef}
                                    onChange={this.handleEmailChange}
                                    onKeyDown={this.handleKeyDownAdd}
                                    autoFocus={true}
                                />
                                <TextField
                                    className="field user-name"
                                    value={userNameField}
                                    helperText="UserName"
                                    ref={this.userNameRef}
                                    onChange={this.handleUserNameChange}
                                    onKeyDown={this.handleKeyDownAdd}
                                />
                                <TextField
                                    className="field task-name-add"
                                    value={taskNameAddField}
                                    helperText="TaskName"
                                    ref={this.taskNameAddRef}
                                    onChange={this.handleTaskNameAddChange}
                                    onKeyDown={this.handleKeyDownAdd}
                                />
                                <Button
                                    className="btn add-task-btn"
                                    onClick={this.handleAddTask}
                                    disabled={addFieldsEmpty}
                                >Add task</Button>
                            </div>
                        )
                        : (
                            <div className="bottom edit-task">
                                <TextField
                                    className="field task-name-edit"
                                    value={taskNameEditField}
                                    helperText="Login"
                                    type="text"
                                    ref={this.taskNameEditRef}
                                    onChange={this.handleTaskNameEditChange}
                                    onKeyDown={this.handleKeyDownEdit}
                                />
                                <div className="is-done-block">
                                    <div className="is-done-label">Done:</div>
                                    <Checkbox
                                        className="is-done-value"
                                        checked={isDoneField}
                                        onChange={this.handleDoneChange}
                                        ref={this.doneRef}
                                    />
                                </div>
                                <Button
                                    className="btn edit-task-btn"
                                    onClick={this.handleEditTaskFinish}
                                    disabled={editFieldsEmpty}
                                >Edit task</Button>
                            </div>
                        )
                }
            </div>
        )
    };
}
