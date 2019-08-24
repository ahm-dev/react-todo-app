// External dependencies
import React from 'react';
import { Grid, List } from '@material-ui/core';

// Local dependencies
import TodoItem from '@components/todo/TodoItem';

const TodoList = props => {
  const { todoItems } = props;

  return (
    <Grid container>
      <Grid item xs={false} lg={2} /> {/* empty - serves as offset */}
      <Grid item xs={12} lg={8}>
        <List className="todo-list-container">
          {todoItems.map((item, index) => {
            return (
              <TodoItem
                key={`todo-item-${index}`}
                todoItem={item}
                itemIndex={index}
                hasDivider={index < todoItems.length - 1}
              />
            );
          })}
        </List>
      </Grid>
      <Grid item xs={false} lg={2} /> {/* empty - consistency */}
    </Grid>
  );
};

export default TodoList;
