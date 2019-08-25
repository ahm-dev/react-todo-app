// Local dependencies
import * as actions from '@store/actions';
import { TODO_ACTION_TYPES as ACTION_TYPE } from '@store/defaults';

export const addNewTodo = (currentTodos, newTodoText) => dispatch => {
  dispatch({
    type: ACTION_TYPE.ADD_NEW_TODO,
    payload: actions.addNewTodo(currentTodos, newTodoText)
  });
};

export const removeTodo = (currentTodos, removedTodoIndex) => dispatch => {
  dispatch({
    type: ACTION_TYPE.REMOVE_TODO,
    payload: actions.removeTodo(currentTodos, removedTodoIndex)
  });
};

export const updateTodo = (
  currentTodos,
  updatedTodoIndex,
  updatedTodo
) => dispatch => {
  dispatch({
    type: ACTION_TYPE.UPDATE_TODO,
    payload: actions.updateTodo(currentTodos, updatedTodoIndex, updatedTodo)
  });
};

export const setTodoDialogText = newTextValue => dispatch => {
  dispatch({
    type: ACTION_TYPE.SET_TODO_DIALOG_TEXT,
    payload: newTextValue
  });
};

export const setSelectedTodoIndex = todoIndex => dispatch => {
  dispatch({
    type: ACTION_TYPE.SET_SELECTED_TODO_INDEX,
    payload: todoIndex
  });
};

export const addTodoNote = (
  currentTodos,
  todoIndex,
  newNoteText
) => dispatch => {
  dispatch({
    type: ACTION_TYPE.ADD_TODO_NOTE,
    payload: actions.addTodoNote(currentTodos, todoIndex, newNoteText)
  });
};

export const removeTodoNote = (
  currentTodos,
  todoIndex,
  noteIndex
) => dispatch => {
  dispatch({
    type: ACTION_TYPE.REMOVE_TODO_NOTE,
    payload: actions.removeTodoNote(currentTodos, todoIndex, noteIndex)
  });
};

export const setNoteDialogText = newTextValue => dispatch => {
  dispatch({
    type: ACTION_TYPE.SET_NOTE_DIALOG_TEXT,
    payload: newTextValue
  });
};
