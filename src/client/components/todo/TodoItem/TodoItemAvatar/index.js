// External dependencies
import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CheckIcon from '@material-ui/icons/Check';
import { Avatar, ListItemAvatar, Tooltip } from '@material-ui/core';
import classNames from 'classnames';

const TodoItemAvatar = props => {
  const { completed } = props;
  const tooltipText = `Mark as ${completed ? 'incomplete' : 'completed'}`;

  return (
    <ListItemAvatar>
      <Tooltip title={tooltipText} placement="top">
        <Avatar
          className={classNames(
            'todo-list-item-avatar',
            completed && 'todo-list-item-avatar-completed'
          )}
        >
          {completed ? <CheckIcon /> : <ScheduleIcon />}
        </Avatar>
      </Tooltip>
    </ListItemAvatar>
  );
};

export default TodoItemAvatar;
