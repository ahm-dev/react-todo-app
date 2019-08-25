// External dependencies
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CheckIcon from '@material-ui/icons/Check';
import { Tooltip } from '@material-ui/core';

// Local dependencies
import TodoItemAvatar from '@components/todo/TodoItem/TodoItemAvatar';

configure({ adapter: new Adapter() });

describe('TodoItemAvatar component', () => {
  // simple test - just make sure that the component actually exists
  it('should render a component', () => {
    const component = shallow(<TodoItemAvatar />);

    expect(component.exists()).toBe(true);
  });

  it("should render a ScheduleIcon when passed a 'completed' value of FALSE", () => {
    const component = shallow(<TodoItemAvatar />);

    expect(component.find(ScheduleIcon).length).toBe(1);
  });

  it("should render a CheckIcon when passed a 'completed' value of TRUE", () => {
    const component = shallow(<TodoItemAvatar completed />);

    expect(component.find(CheckIcon).length).toBe(1);
  });

  it("should render a tooltip with appropriate text when passed a 'completed' value of TRUE", () => {
    const component = shallow(<TodoItemAvatar completed />);
    const expectedTooltipText = 'Mark as incomplete';

    const tooltipComponentProps = component
      .find(Tooltip)
      .first()
      .props();
    expect(tooltipComponentProps.title).toBe(expectedTooltipText);
  });

  // ... and so on and so forth
});
