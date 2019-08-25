// Local dependencies
import {
  TODO_ACTION_TYPES as ACTION_TYPE,
  todoStoreDefaults
} from '@store/defaults';

const initialState = todoStoreDefaults;

export default function todoStore(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_NEW_TODO:
    case ACTION_TYPE.REMOVE_TODO:
    case ACTION_TYPE.UPDATE_TODO:
    case ACTION_TYPE.ADD_TODO_NOTE:
    case ACTION_TYPE.REMOVE_TODO_NOTE:
      return {
        ...state,
        todos: action.payload.todos
      };
    case ACTION_TYPE.SET_TODO_DIALOG_TEXT:
      return {
        ...state,
        todoDialogText: action.payload
      };
    case ACTION_TYPE.SET_SELECTED_TODO_INDEX:
      return {
        ...state,
        selectedTodoIndex: action.payload
      };
    case ACTION_TYPE.SET_NOTE_DIALOG_TEXT:
      return {
        ...state,
        noteDialogText: action.payload
      };
    default:
      return state;
  }
}
