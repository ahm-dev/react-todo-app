// External dependencies
import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

// Local dependencies
import TodoItemAvatar from '@components/todo/TodoItem/TodoItemAvatar';
import TodoItemActions from '@components/todo/TodoItem/TodoItemActions';

const TodoItem = props => {
  const { hasDivider, itemIndex, todoItem } = props;
  const { completed, text } = todoItem;

  return (
    <ListItem dense button divider={hasDivider}>
      <TodoItemAvatar completed={completed} />
      <ListItemText
        className="todo-list-item-text"
        primary={text}
      ></ListItemText>
      <TodoItemActions todoIndex={itemIndex} />
    </ListItem>
  );
};

export default TodoItem;
