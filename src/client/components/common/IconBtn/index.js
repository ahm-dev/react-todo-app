// External dependencies
import React from 'react';
import { Button } from '@material-ui/core';

const IconBtn = props => {
  const { btnText, children } = props;

  return (
    <Button color="secondary" variant="contained">
      {children}
      {btnText}
    </Button>
  );
};

export default IconBtn;
