// External dependencies
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  IconButton,
  ListItemSecondaryAction,
  Tooltip
} from '@material-ui/core';

const TodoItemActions = props => {
  return (
    <ListItemSecondaryAction>
      <Tooltip title="Edit this item" placement="top">
        <IconButton className="todo-list-item-action">
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Remove this item" placement="top">
        <IconButton className="todo-list-item-action" edge="end">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  );
};

export default TodoItemActions;
