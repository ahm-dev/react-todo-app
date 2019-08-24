// External dependencies
import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavigationControls = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <Button color="secondary" variant="contained" className="ma-8">
          Todo
        </Button>
      </Link>
      <Link to="/about">
        <Button color="secondary" variant="contained" className="ma-8">
          About
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default NavigationControls;
