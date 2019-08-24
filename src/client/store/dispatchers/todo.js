import * as actions from '@store/actions';
import { TODO_ACTION_TYPES as ACTION_TYPE } from '@store/defaults';

export const addNewTodo = (currentTodos, newTodoText) => dispatch => {
  dispatch({
    type: ACTION_TYPE.ADD_NEW_TODO,
    payload: actions.addNewTodo(currentTodos, newTodoText)
  });
};
