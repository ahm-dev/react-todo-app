// External dependencies
import { assign } from 'lodash';

// Local dependencies
import todoStore from '@store/reducers/todo';
import { todoStoreDefaults } from '@store/defaults';
import { TODO_ACTION_TYPES as ACTION_TYPE } from '@store/defaults';

describe('Todo Store Redux reducer', () => {
  it('should generate expected initial state', () => {
    const initializedStore = todoStore(undefined, {});

    expect(initializedStore).toEqual(todoStoreDefaults);
  });

  it("should update 'todos' after addNewTodo() is dispatched", () => {
    const testTodoText = 'test';
    const expectedPayload = {
      todos: [
        {
          text: testTodoText,
          notes: [],
          completed: false
        }
      ]
    };
    const addNewTodoAction = {
      type: ACTION_TYPE.ADD_NEW_TODO,
      payload: expectedPayload
    };

    const expectedUpdatedState = assign({}, todoStoreDefaults, expectedPayload); // mesh the store defaults w/ the expected payload
    const initializedStore = todoStore(undefined, addNewTodoAction);
    expect(initializedStore).toEqual(expectedUpdatedState);
  });

  it("should update 'todoDialogText' after setTodoDialogText() is dispatched", () => {
    const testDialogText = 'test';
    const expectedPayload = { todoDialogText: testDialogText };
    const setTodoDialogTextAction = {
      type: ACTION_TYPE.SET_TODO_DIALOG_TEXT,
      payload: testDialogText
    };

    const expectedUpdatedState = assign({}, todoStoreDefaults, expectedPayload); // mesh the store defaults w/ the expected payload
    const initializedStore = todoStore(undefined, setTodoDialogTextAction);
    expect(initializedStore).toEqual(expectedUpdatedState);
  });

  // ... and so on and so forth
});
