// External dependencies
import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

// Local dependencies
import TodoItemAvatar from '@components/todo/TodoItem/TodoItemAvatar';
import TodoItemActions from '@components/todo/TodoItem/TodoItemActions';

const TodoItem = props => {
  const {
    editOnClick,
    hasDivider,
    itemIndex,
    itemOnClick,
    removeOnClick,
    todoItem,
    toggleItemCompletion
  } = props;
  const { completed, text } = todoItem;

  return (
    <ListItem
      dense
      button
      divider={hasDivider}
      onClick={() => {
        itemOnClick(itemIndex);
      }}
    >
      <TodoItemAvatar
        completed={completed}
        onClick={e => toggleItemCompletion(e, todoItem, itemIndex)}
      />
      <ListItemText
        className="todo-list-item-text"
        primary={text}
      ></ListItemText>
      <TodoItemActions
        editOnClick={editOnClick}
        removeOnClick={removeOnClick}
        todoIndex={itemIndex}
      />
    </ListItem>
  );
};

TodoItem.defaultProps = {
  todoItem: {}
};

export default TodoItem;
