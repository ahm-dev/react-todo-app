// External dependencies
import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { defaultUnimplementedFunction } from '@lib/util';

const AddNoteCtrls = props => {
  const { addNewNote, newNoteText, updateNewNoteText } = props;

  return (
    <Grid container alignItems="center">
      <Grid item xs={10}>
        <TextField
          label="New note"
          value={newNoteText}
          onChange={updateNewNoteText}
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          className="ml-8"
          color="secondary"
          variant="contained"
          onClick={addNewNote}
        >
          add
        </Button>
      </Grid>
    </Grid>
  );
};

AddNoteCtrls.defaultProps = {
  addNewNote: defaultUnimplementedFunction,
  newNoteText: '',
  updateNewNoteText: defaultUnimplementedFunction
};

export default AddNoteCtrls;
