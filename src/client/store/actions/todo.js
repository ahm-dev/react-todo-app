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
