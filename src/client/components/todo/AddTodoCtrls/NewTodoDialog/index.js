// External dependencies
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';
import { connect } from 'react-redux';

// Local dependencies
import { addNewTodo } from '@store/dispatchers';

class NewTodoDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    };
  }

  dialogOnClose = () => {
    const { resetTextInput } = this;
    const { onClose } = this.props;

    resetTextInput();
    onClose();
  };

  resetTextInput = () => {
    this.setState({ newTodoText: '' });
  };

  saveTodo = () => {
    const { addNewTodo, todoItems } = this.props;
    const { newTodoText } = this.state;
    const { dialogOnClose } = this;

    addNewTodo(todoItems, newTodoText);
    dialogOnClose();
  };

  textInput = e => {
    const newTodoText = e.target.value;

    this.setState({ newTodoText });
  };

  render() {
    const { dialogOnClose, saveTodo, textInput } = this;
    const { open } = this.props;
    const { newTodoText } = this.state;

    return (
      <Dialog fullWidth maxWidth="xs" onClose={dialogOnClose} open={open}>
        <DialogTitle>Add new todo</DialogTitle>
        <DialogContent>
          <TextField
            label="Todo Text"
            value={newTodoText}
            onChange={textInput}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button className="ma-8" variant="contained" onClick={dialogOnClose}>
            cancel
          </Button>
          <Button
            className="ma-8"
            color="secondary"
            variant="contained"
            onClick={saveTodo}
          >
            add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  todoItems: state.todoStore.todos
});

const mapDispatchToProps = {
  addNewTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodoDialog);
