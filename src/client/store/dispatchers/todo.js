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
