// External dependencies
import React from 'react';
import AddIcon from '@material-ui/icons/Add';

// Local dependencies
import NewTodoDialog from '@components/todo/AddTodoCtrls/NewTodoDialog';
import { IconBtn } from '@components/common';

class AddTodoCtrls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  openDialog = () => {
    this.setState({ dialogOpen: true });
  };

  render() {
    const { dialogOpen } = this.state;
    const { closeDialog, openDialog } = this;

    return (
      <div className="mt-24 w-100">
        <NewTodoDialog open={dialogOpen} onClose={closeDialog} />
        <IconBtn btnText="add new todo" onClick={openDialog}>
          <AddIcon className="mr-8" />
        </IconBtn>
      </div>
    );
  }
}

export default AddTodoCtrls;

// const { addNewTodo, todoItems } = this.props;

// e.preventDefault();
// this.setState({ dialogOpen: true });
// // addNewTodo(todoItems, 'some test text');
