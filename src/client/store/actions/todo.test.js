// Local dependencies
import { addNewTodo, addTodoNote, updateTodo } from '@store/actions/todo';

describe('Todo Store Redux actions', () => {
  it('should return a todo list with one new todo when addNewTodo() is called', () => {
    const testTodoText = 'test';
    const testCurrentTodos = [];
    const expectedUpdatedTodos = {
      todos: [
        {
          text: testTodoText,
          notes: [],
          completed: false
        }
      ]
    };

    const updatedTodos = addNewTodo(testCurrentTodos, testTodoText);
    expect(updatedTodos).toEqual(expectedUpdatedTodos);
  });

  it('should return a todo list with a todo with updated notes when addTodoNote() is called', () => {
    const testNoteText = 'test';
    const testTodo = { text: 'test', notes: [], completed: false };
    const testCurrentTodos = [testTodo];
    const testTodoIndex = 0;
    const expectedUpdatedTodos = {
      todos: [{ ...testTodo, notes: [testNoteText] }]
    };

    const updatedTodos = addTodoNote(
      testCurrentTodos,
      testTodoIndex,
      testNoteText
    );
    expect(updatedTodos).toEqual(expectedUpdatedTodos);
  });

  it('should return an updated todo list when updateTodo() is called', () => {
    const testTodo = { text: 'test', notes: [], completed: false };
    const testCurrentTodos = [testTodo];
    const testTodoIndex = 0;
    const testUpdatedTodo = { ...testTodo, text: 'another test' };
    const expectedUpdatedTodos = { todos: [testUpdatedTodo] };

    const updatedTodos = updateTodo(
      testCurrentTodos,
      testTodoIndex,
      testUpdatedTodo
    );
    expect(updatedTodos).toEqual(expectedUpdatedTodos);
  });

  // ... and so on and so forth
});
