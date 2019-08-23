import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const HeaderToolbar = props => {
  const { children, title } = props;

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h6" className="flex-grow text-left">
          {title}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderToolbar;
