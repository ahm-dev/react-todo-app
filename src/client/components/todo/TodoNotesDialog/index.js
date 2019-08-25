// External dependencies
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { connect } from 'react-redux';

// Local dependencies
import NotesList from '@components/todo/TodoNotesDialog/NotesList';
import AddNoteCtrls from '@components/todo/TodoNotesDialog/AddNoteCtrls';
import { defaultUnimplementedFunction } from '@lib/util';
import {
  addTodoNote,
  removeTodoNote,
  setNoteDialogText
} from '@store/dispatchers';

const TodoNotesDialog = props => {
  const {
    addTodoNote,
    noteDialogText,
    onClose,
    open,
    removeTodoNote,
    selectedTodoIndex,
    setNoteDialogText,
    todoItems
  } = props;

  const addNewNote = () => {
    addTodoNote(todoItems, selectedTodoIndex, noteDialogText);
    setNoteDialogText('');
  };

  const updateNoteDialogText = e => {
    const newTextValue = e.target.value;

    setNoteDialogText(newTextValue);
  };

  const removeNote = removedNoteIndex => {
    removeTodoNote(todoItems, selectedTodoIndex, removedNoteIndex);
  };

  const currentTodo = todoItems[selectedTodoIndex] || {};

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle>'{currentTodo.text}' - notes</DialogTitle>
      <DialogContent>
        <NotesList notes={currentTodo.notes} onRemoveNote={removeNote} />
        <AddNoteCtrls
          addNewNote={addNewNote}
          newNoteText={noteDialogText}
          updateNewNoteText={updateNoteDialogText}
        />
      </DialogContent>
      <DialogActions>
        <Button className="ma-8" variant="contained" onClick={onClose}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

TodoNotesDialog.defaultProps = {
  noteDialogText: '',
  onClose: defaultUnimplementedFunction,
  open: false,
  setNoteDialogText: defaultUnimplementedFunction,
  todoItems: []
};

const mapStateToProps = state => ({
  noteDialogText: state.todoStore.noteDialogText,
  selectedTodoIndex: state.todoStore.selectedTodoIndex,
  todoItems: state.todoStore.todos
});

const mapDispatchToProps = {
  addTodoNote,
  removeTodoNote,
  setNoteDialogText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoNotesDialog);
