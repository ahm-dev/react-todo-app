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

// Local dependencies
const TodoTextDialog = props => {
  const { isEditing, onClose, onChange, onSave, open, text } = props;

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle>{isEditing ? 'Edit' : 'Add new'} todo</DialogTitle>
      <DialogContent>
        <TextField
          label="Todo Text"
          value={text}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button className="ma-8" variant="contained" onClick={onClose}>
          cancel
        </Button>
        <Button
          className="ma-8"
          color="secondary"
          variant="contained"
          onClick={onSave}
        >
          {isEditing ? 'update' : 'add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoTextDialog;
