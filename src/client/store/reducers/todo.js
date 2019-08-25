import { TODO_ACTION_TYPES as ACTION_TYPE } from '@store/defaults';

const initialState = {
  todos: [
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
  ],
  todoDialogText: '',
  selectedTodoIndex: -1
};

export default function todoStore(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_NEW_TODO:
    case ACTION_TYPE.REMOVE_TODO:
    case ACTION_TYPE.UPDATE_TODO:
      return {
        ...state,
        todos: action.payload.todos
      };
    case ACTION_TYPE.SET_TODO_DIALOG_TEXT:
      return {
        ...state,
        todoDialogText: action.payload.todoDialogText
      };
    case ACTION_TYPE.SET_SELECTED_TODO_INDEX:
      return {
        ...state,
        selectedTodoIndex: action.payload.selectedTodoIndex
      };
    default:
      return state;
  }
}
