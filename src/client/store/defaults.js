// Add additional action types here as necessary
export const TODO_ACTION_TYPES = {
  ADD_NEW_TODO: 'ADD_NEW_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  SET_TODO_DIALOG_TEXT: 'SET_TODO_DIALOG_TEXT',
  SET_SELECTED_TODO_INDEX: 'SET_SELECTED_TODO_INDEX',
  ADD_TODO_NOTE: 'ADD_TODO_NOTE',
  REMOVE_TODO_NOTE: 'REMOVE_TODO_NOTE',
  SET_NOTE_DIALOG_TEXT: 'SET_NOTE_DIALOG_TEXT'
};

// Sample todos - you may optionally set these as the initialState
// for 'todos' if you would like the page to start with some sample todos

// todos: [
//     {
//       text: 'Sample todo',
//       notes: ['I am a sample note', 'I am another sample note'],
//       completed: false
//     },
//     {
//       text: 'A second sample todo',
//       notes: ['I am a sample note', 'I am another sample note'],
//       completed: true
//     },
//     {
//       text: 'A third sample todo',
//       notes: ['I am a sample note', 'I am another sample note'],
//       completed: true
//     }
//   ],

export const todoStoreDefaults = {
  todos: [],
  todoDialogText: '',
  selectedTodoIndex: -1,
  noteDialogText: ''
};

export const defaultTodo = {
  text: '',
  notes: [],
  completed: false
};
