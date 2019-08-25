// Local dependencies
import { TODO_ACTION_TYPES as ACTION_TYPE } from '@store/defaults';
import * as todoActions from '@store/dispatchers/todo';
import { defaultTodo } from '@store/defaults';

describe('Todo Store Redux dispatchers', () => {
  it('should resolve the appropriate dispatch type and payload when addNewTodo() is dispatched', () => {
    const testTodoText = 'test';
    const testCurrentTodos = [];
    const testNewTodo = { ...defaultTodo, text: testTodoText };
    const addNewTodoSpy = jest.spyOn(todoActions, 'addNewTodo');
    const mockDispatcher = action =>
      addNewTodoSpy(testCurrentTodos, testTodoText)(action);
    const expectedDispatchType = ACTION_TYPE.ADD_NEW_TODO;
    const expectedPayload = { todos: [testNewTodo] };

    mockDispatcher(dispatch => {
      expect(dispatch.type).toBe(expectedDispatchType);
      expect(dispatch.payload).toEqual(expectedPayload);
    });
  });

  it('should resolve the appropriate dispatch type and payload when setTodoDialogText() is dispatched', () => {
    const testDialogText = 'test';
    const setTodoDialogTextSpy = jest.spyOn(todoActions, 'setTodoDialogText');
    const mockDispatcher = action =>
      setTodoDialogTextSpy(testDialogText)(action);
    const expectedDispatchType = ACTION_TYPE.SET_TODO_DIALOG_TEXT;

    mockDispatcher(dispatch => {
      expect(dispatch.type).toBe(expectedDispatchType);
      expect(dispatch.payload).toEqual(testDialogText);
    });
  });

  // ... and so on and so forth
});
