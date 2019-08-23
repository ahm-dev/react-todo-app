import React from 'react';
import { Button } from '@material-ui/core';

const NavigationControls = () => {
  return (
    <React.Fragment>
      <Button color="secondary" variant="contained" className="ma-2">
        Todo
      </Button>
      <Button color="secondary" variant="contained" className="ma-2">
        About
      </Button>
    </React.Fragment>
  );
};

export default NavigationControls;
