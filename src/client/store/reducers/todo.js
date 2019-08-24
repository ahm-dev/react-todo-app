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
  ]
};

export default function todoStore(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_NEW_TODO:
      return {
        todos: action.payload.todos
      };
    default:
      return state;
  }
}
