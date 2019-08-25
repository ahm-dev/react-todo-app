// External dependencies
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip
} from '@material-ui/core';

const NotesList = props => {
  const { onRemoveNote, notes } = props;

  return (
    <List>
      {notes.map((note, index) => {
        return (
          <ListItem key={note} dense>
            <ListItemText>{note}</ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title="Remove this note" placement="top">
                <IconButton edge="end" onClick={() => onRemoveNote(index)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

NotesList.defaultProps = {
  notes: []
};

export default NotesList;
