// External dependencies
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  IconButton,
  ListItemSecondaryAction,
  Tooltip
} from '@material-ui/core';
import { connect } from 'react-redux';

// Local dependencies
import { removeTodo } from '@store/dispatchers';

const TodoItemActions = props => {
  const { removeTodo, todoIndex, todoItems } = props;

  return (
    <ListItemSecondaryAction>
      <Tooltip title="Edit this item" placement="top">
        <IconButton className="todo-list-item-action">
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Remove this item" placement="top">
        <IconButton
          className="todo-list-item-action"
          edge="end"
          onClick={() => removeTodo(todoItems, todoIndex)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  );
};

const mapStateToProps = state => ({
  todoItems: state.todoStore.todos
});

const mapDispatchToProps = {
  removeTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemActions);
