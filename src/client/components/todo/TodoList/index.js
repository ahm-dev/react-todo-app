// External dependencies
import React from 'react';
import { Grid, List } from '@material-ui/core';
import { connect } from 'react-redux';

// Local dependencies
import TodoItem from '@components/todo/TodoItem';
import TodoTextDialog from '@components/todo/TodoTextDialog';
import TodoNotesDialog from '@components/todo/TodoNotesDialog';
import { updateProperty } from '@lib/formatting';
import {
  removeTodo,
  setNoteDialogText,
  setSelectedTodoIndex,
  setTodoDialogText,
  updateTodo
} from '@store/dispatchers';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDialogOpen: false,
      notesDialogOpen: false
    };
  }

  closeNotesDialog = () => {
    const { setNoteDialogText, setSelectedTodoIndex } = this.props;

    setNoteDialogText('');
    setSelectedTodoIndex(-1);
    this.setState({ notesDialogOpen: false });
  };

  openNotesDialog = selectedTodoIndex => {
    const { setNoteDialogText, setSelectedTodoIndex } = this.props;

    setNoteDialogText('');
    setSelectedTodoIndex(selectedTodoIndex);
    this.setState({ notesDialogOpen: true });
  };

  // resets Redux dialog text to empty && closes dialog
  closeEditDialog = () => {
    const { setSelectedTodoIndex, setTodoDialogText } = this.props;

    setTodoDialogText('');
    setSelectedTodoIndex(-1);
    this.setState({ editDialogOpen: false });
  };

  // sets Redux dialog text to selected todo item for editing && opens dialog
  openEditDialog = (e, selectedTodoIndex) => {
    e.stopPropagation();
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

  removeItem = (e, selectedTodoIndex) => {
    e.stopPropagation();
    const { removeTodo, todoItems } = this.props;

    removeTodo(todoItems, selectedTodoIndex);
  };

  render() {
    const { editDialogOpen, notesDialogOpen } = this.state;
    const {
      closeEditDialog,
      closeNotesDialog,
      onSaveUpdate,
      openEditDialog,
      openNotesDialog,
      removeItem,
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
        <TodoNotesDialog onClose={closeNotesDialog} open={notesDialogOpen} />
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
                    itemOnClick={openNotesDialog}
                    removeOnClick={removeItem}
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
  removeTodo,
  setNoteDialogText,
  setSelectedTodoIndex,
  setTodoDialogText,
  updateTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
