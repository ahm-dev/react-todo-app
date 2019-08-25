// External dependencies
import { concat } from 'lodash';

// Local dependencies
import { updateProperty } from '@lib/formatting';
import { defaultTodo } from '@store/defaults';

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

export const addTodoNote = (currentTodos, todoIndex, newNoteText) => {
  const currentTodo = currentTodos[todoIndex];
  const updatedTodoNotes = concat(currentTodo.notes, newNoteText);
  const updatedTodo = updateProperty(currentTodo, 'notes', updatedTodoNotes);

  return updateTodo(currentTodos, todoIndex, updatedTodo);
};

export const removeTodoNote = (currentTodos, todoIndex, removedNoteIndex) => {
  const currentTodo = currentTodos[todoIndex];
  const updatedItemNotes = currentTodo.notes.filter(
    (note, index) => index !== removedNoteIndex
  );
  const updatedTodo = updateProperty(currentTodo, 'notes', updatedItemNotes);

  return updateTodo(currentTodos, todoIndex, updatedTodo);
};

export const updateTodo = (currentTodos, updatedTodoIndex, updatedTodo) => {
  let updatedTodosList = currentTodos.slice(); // safe copy current todoList
  updatedTodosList[updatedTodoIndex] = updatedTodo;

  return { todos: updatedTodosList };
};
