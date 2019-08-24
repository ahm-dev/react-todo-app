// External dependencies
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

// Local dependencies
import { IconBtn, ViewTitle } from '@components/common';
import TodoList from '@components/todo/TodoList';

const TodoView = props => {
  const { todoList } = props;

  return (
    <div>
      <ViewTitle title="Todo List" />
      <TodoList todoItems={todoList} />
      <div className="mt-24 w-100">
        <IconBtn btnText="add new todo">
          <AddIcon className="mr-8" />
        </IconBtn>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todoList: state.todoStore.todos
});

export default connect(mapStateToProps)(TodoView);
