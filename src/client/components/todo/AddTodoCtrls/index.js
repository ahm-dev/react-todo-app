// External dependencies
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

// Local dependencies
import TodoTextDialog from '@components/todo/TodoTextDialog';
import { IconBtn } from '@components/common';
import { addNewTodo, setTodoDialogText } from '@store/dispatchers';

class AddTodoCtrls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addDialogOpen: false
    };
  }

  // resets Redux dialog text to empty && closes dialog
  closeAddDialog = () => {
    const { setTodoDialogText } = this.props;

    setTodoDialogText('');
    this.setState({ addDialogOpen: false });
  };

  // sets Redux dialog text to selected todo item for editing && opens dialog
  openAddDialog = () => {
    const { setTodoDialogText } = this.props;

    setTodoDialogText('');
    this.setState({ addDialogOpen: true });
  };

  updateDialogText = e => {
    const { setTodoDialogText } = this.props;
    const newTextValue = e.target.value;

    setTodoDialogText(newTextValue);
  };

  onAddTodo = () => {
    const { addNewTodo, todoDialogText, todoItems } = this.props;
    const { closeAddDialog } = this;

    addNewTodo(todoItems, todoDialogText);
    closeAddDialog();
  };

  render() {
    const { addDialogOpen } = this.state;
    const { todoDialogText } = this.props;
    const { closeAddDialog, onAddTodo, openAddDialog, updateDialogText } = this;

    return (
      <div className="mt-24 w-100">
        <TodoTextDialog
          open={addDialogOpen}
          onChange={updateDialogText}
          onClose={closeAddDialog}
          onSave={onAddTodo}
          text={todoDialogText}
        />
        <IconBtn btnText="add new todo" onClick={openAddDialog}>
          <AddIcon className="mr-8" />
        </IconBtn>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoDialogText: state.todoStore.todoDialogText,
  todoItems: state.todoStore.todos
});

const mapDispatchToProps = {
  addNewTodo,
  setTodoDialogText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoCtrls);
