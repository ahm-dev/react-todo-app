// External dependencies
import React from 'react';
import AddIcon from '@material-ui/icons/Add';

// Local dependencies
import { IconBtn, ViewTitle } from '@components/common';
import TodoList from '@components/todo/TodoList';

const SAMPLE_TODO_ITEMS = [
  {
    text: 'Sample todo',
    notes: [],
    completed: false
  },
  {
    text: 'A second sample todo',
    notes: [],
    completed: true
  },
  {
    text: 'A third sample todo',
    notes: [],
    completed: true
  }
];

const TodoView = () => {
  return (
    <div>
      <ViewTitle title="Todo List" />
      <TodoList todoItems={SAMPLE_TODO_ITEMS} />
      <div className="mt-24 w-100">
        <IconBtn btnText="add new todo">
          <AddIcon className="mr-8" />
        </IconBtn>
      </div>
    </div>
  );
};

export default TodoView;
