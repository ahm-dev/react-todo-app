// External dependencies
import React from 'react';
import { Grid, List } from '@material-ui/core';
import { connect } from 'react-redux';

// Local dependencies
import TodoItem from '@components/todo/TodoItem';
import TodoTextDialog from '@components/todo/TodoTextDialog';
import { updateProperty } from '@lib/formatting';
import {
  setSelectedTodoIndex,
  setTodoDialogText,
  updateTodo
} from '@store/dispatchers';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDialogOpen: false
    };
  }

  // resets Redux dialog text to empty && closes dialog
  closeEditDialog = () => {
    const { setSelectedTodoIndex, setTodoDialogText } = this.props;

    setTodoDialogText('');
    setSelectedTodoIndex(-1);
    this.setState({ editDialogOpen: false });
  };

  // sets Redux dialog text to selected todo item for editing && opens dialog
  openEditDialog = selectedTodoIndex => {
    const { setSelectedTodoIndex, setTodoDialogText, todoItems } = this.props;
    const selectedTodoText = todoItems[selectedTodoIndex].text;

    setTodoDialogText(selectedTodoText);
    setSelectedTodoIndex(selectedTodoIndex);
    this.setState({ editDialogOpen: true });
  };

  updateDialogText = e => {
    const { setTodoDialogText } = this.props;
    const newTextValue = e.target.value;

    setTodoDialogText(newTextValue);
  };

  onSaveUpdate = () => {
    const {
      selectedTodoIndex,
      todoDialogText,
      todoItems,
      updateTodo
    } = this.props;
    const { closeEditDialog } = this;
    const todoItem = todoItems[selectedTodoIndex];
    const updatedItem = updateProperty(todoItem, 'text', todoDialogText);

    updateTodo(todoItems, selectedTodoIndex, updatedItem);
    closeEditDialog();
  };

  render() {
    const { editDialogOpen } = this.state;
    const {
      closeEditDialog,
      onSaveUpdate,
      openEditDialog,
      updateDialogText
    } = this;
    const { todoDialogText, todoItems } = this.props;

    return (
      <React.Fragment>
        <TodoTextDialog
          isEditing
          open={editDialogOpen}
          onChange={updateDialogText}
          onClose={closeEditDialog}
          onSave={onSaveUpdate}
          text={todoDialogText}
        />
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
                    editOnClick={openEditDialog}
                  />
                );
              })}
            </List>
          </Grid>
          <Grid item xs={false} lg={2} /> {/* empty - consistency */}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedTodoIndex: state.todoStore.selectedTodoIndex,
  todoDialogText: state.todoStore.todoDialogText,
  todoItems: state.todoStore.todos
});

const mapDispatchToProps = {
  setSelectedTodoIndex,
  setTodoDialogText,
  updateTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
