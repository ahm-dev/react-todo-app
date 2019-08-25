// External dependencies
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { List, ListItem } from '@material-ui/core';

// Local dependencies
import TodoList from '@components/todo/TodoList';
import TodoItem from '@components/todo/TodoItem';

const mockStore = configureStore([thunk]);
configure({ adapter: new Adapter() });

describe('TodoList component', () => {
  // simple test - just make sure that the component actually exists
  it('should render a component', () => {
    const store = mockStore({ todoStore: { todoDialogText: '', todos: [] } });
    const component = shallow(<TodoList store={store} />)
      .dive()
      .dive(); // have to dive an additional time to jump through the Connect HOC

    expect(component.exists()).toBe(true);
  });

  it('should render a list with the appropriate number of state-managed todoItems', () => {
    const mockTodos = [
      { text: 'test', notes: [], completed: false },
      { text: 'another test', notes: [], completed: false }
    ];
    const todoStore = {
      todoDialogText: '',
      todos: mockTodos
    };
    const store = mockStore({ todoStore });
    const component = shallow(<TodoList store={store} />)
      .dive()
      .dive(); // have to dive an additional time to jump through the Connect HOC

    const listComponent = component.find(List).first();
    const todoItemComponents = listComponent.find(TodoItem);
    expect(todoItemComponents.length).toBe(mockTodos.length);
  });

  it('should call the openNotesDialog() function when a todo item is clicked', () => {
    const mockTodos = [
      { text: 'test', notes: [], completed: false },
      { text: 'another test', notes: [], completed: false }
    ];
    const todoStore = {
      todoDialogText: '',
      todos: mockTodos
    };
    const store = mockStore({ todoStore });
    const component = shallow(<TodoList store={store} />)
      .dive()
      .dive(); // have to dive an additional time to jump through the Connect HOC

    const componentInstance = component.instance();
    const openNotesDialogSpy = jest.spyOn(componentInstance, 'openNotesDialog');
    componentInstance.forceUpdate(); // register the spy

    const listComponent = component.find(List).first();
    const todoItemComponent = listComponent
      .find(TodoItem)
      .first()
      .dive();
    const listItemComponent = todoItemComponent.find(ListItem).first();
    listItemComponent.simulate('click');
    expect(openNotesDialogSpy).toHaveBeenCalled();
  });

  it('should set the notesDialogOpen state to TRUE when the openNotesDialog() function is called', () => {
    const mockTodos = [{ text: 'test', notes: [], completed: false }];
    const todoStore = {
      todoDialogText: '',
      todos: mockTodos
    };
    const store = mockStore({ todoStore });
    const component = shallow(<TodoList store={store} />)
      .dive()
      .dive(); // have to dive an additional time to jump through the Connect HOC

    // call the function...
    const componentInstance = component.instance();
    componentInstance.openNotesDialog();

    // ...and make sure the state is updated!
    expect(componentInstance.state.notesDialogOpen).toBe(true);
  });

  // ... and so on and so forth
});
