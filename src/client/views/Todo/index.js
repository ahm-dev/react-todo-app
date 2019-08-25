// External dependencies
import React from 'react';

// Local dependencies
import { ViewTitle } from '@components/common';
import TodoList from '@components/todo/TodoList';
import AddTodoCtrls from '@components/todo/AddTodoCtrls';

const TodoView = props => {
  return (
    <div>
      <ViewTitle title="Todo List" />
      <TodoList />
      <AddTodoCtrls />
    </div>
  );
};

export default TodoView;
