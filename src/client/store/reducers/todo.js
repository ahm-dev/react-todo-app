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
    default:
      return state;
  }
}
