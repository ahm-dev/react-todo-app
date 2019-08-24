// External dependencies
import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';

// Local dependencies
import TodoItemAvatar from '@components/todo/TodoItem/TodoItemAvatar';
import TodoItemActions from '@components/todo/TodoItem/TodoItemActions';
import { updateTodo } from '@store/dispatchers';
import { updateProperty } from '@lib/formatting';

const TodoItem = props => {
  const { hasDivider, itemIndex, todoItem, todoItems, updateTodo } = props;
  const { completed, text } = todoItem;

  const toggleItemCompletion = () => {
    const updatedCompletion = !todoItem.completed;
    const updatedItem = updateProperty(
      todoItem,
      'completed',
      updatedCompletion
    );

    updateTodo(todoItems, itemIndex, updatedItem);
  };

  return (
    <ListItem dense button divider={hasDivider}>
      <TodoItemAvatar completed={completed} onClick={toggleItemCompletion} />
      <ListItemText
        className="todo-list-item-text"
        primary={text}
      ></ListItemText>
      <TodoItemActions todoIndex={itemIndex} />
    </ListItem>
  );
};

const mapStateToProps = state => ({
  todoItems: state.todoStore.todos
});

const mapDispatchToProps = {
  updateTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
