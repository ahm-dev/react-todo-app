import { concat } from 'lodash';

const defaultTodo = {
  text: '',
  notes: [],
  completed: false
};

export const addNewTodo = (currentTodos, newTodoText) => {
  const newTodo = { ...defaultTodo, text: newTodoText };
  const updatedTodosList = concat(currentTodos, newTodo);

  return { todos: updatedTodosList };
};

export const removeTodo = (currentTodos, removedTodoIndex) => {
  const updatedTodosList = currentTodos.filter(
    (todo, index) => index !== removedTodoIndex
  );

  return { todos: updatedTodosList };
};
