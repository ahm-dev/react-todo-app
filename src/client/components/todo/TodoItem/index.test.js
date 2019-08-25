// External dependencies
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { ListItemText } from '@material-ui/core';

// Local dependencies
import TodoItem from '@components/todo/TodoItem';
import TodoItemAvatar from '@components/todo/TodoItem/TodoItemAvatar';

configure({ adapter: new Adapter() });

describe('TodoItem component', () => {
  // simple test - just make sure that the component actually exists
  it('should render a component', () => {
    const component = shallow(<TodoItem />).dive();

    expect(component.exists()).toBe(true);
  });

  it('should render the appropriate text when passed a todo item', () => {
    const testTodoItem = { text: 'test', notes: [], completed: false };
    const component = shallow(<TodoItem todoItem={testTodoItem} />).dive();

    const listItemTextProps = component
      .find(ListItemText)
      .first()
      .props();
    expect(listItemTextProps.primary).toBe(testTodoItem.text);
  });

  it("should call the appropriate onClick function when the 'completion status' Avatar is clicked", () => {
    const testTodoItem = { text: 'test', notes: [], completed: false };
    const mockUpdateFn = jest.fn();
    const component = shallow(
      <TodoItem todoItem={testTodoItem} toggleItemCompletion={mockUpdateFn} />
    ).dive();

    const todoItemAvatar = component.find(TodoItemAvatar).first();
    todoItemAvatar.simulate('click');
    expect(mockUpdateFn).toHaveBeenCalled();
  });

  it("should call the  onClick function with the appropriate arguments when the 'completion status' Avatar is clicked", () => {
    const testTodoItem = { text: 'test', notes: [], completed: false };
    const testTodoItemIndex = 1;
    const mockUpdateFn = jest.fn();
    const component = shallow(
      <TodoItem
        itemIndex={testTodoItemIndex}
        todoItem={testTodoItem}
        toggleItemCompletion={mockUpdateFn}
      />
    ).dive();

    const todoItemAvatar = component.find(TodoItemAvatar).first();
    todoItemAvatar.simulate('click');
    const expectedArgs = [undefined, testTodoItem, testTodoItemIndex];
    expect(mockUpdateFn).toHaveBeenCalledWith(...expectedArgs);
  });

  // ... and so on and so forth
});
