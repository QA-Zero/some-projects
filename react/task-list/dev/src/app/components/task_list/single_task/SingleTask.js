import React from 'react';
import '$assets/styles/SingleTask.scss';
import Button from '@material-ui/core/Button/Button';
import Checkbox from '@material-ui/core/Checkbox';

export default ({
    index,
    isAdmin,
    email,
    userName,
    taskName,
    status,
    editTaskStart
}) => {
    const handleEditStart = () => {
        editTaskStart(index);
    };

    return (
        <div className="single-task">
            <div className="control task-name">{taskName}</div>
            <div className="control user-name">{userName}</div>
            <div className="control email">{email}</div>
            <div className="control is-done-block">
                <Checkbox
                    className="control is-done-value"
                    checked={status}
                    disabled
                />
            </div>
            <div className="control edit-task-block">
                {
                    isAdmin
                        ? (
                            <Button
                                className="btn edit-task-btn"
                                onClick={handleEditStart}
                            >Edit</Button>
                        )
                        : false
                }
            </div>
        </div>
    )
}
