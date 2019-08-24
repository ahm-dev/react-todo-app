// External dependencies
import React from 'react';
import { Button } from '@material-ui/core';

const IconBtn = props => {
  const { btnText, children, ...rest } = props;

  return (
    <Button color="secondary" variant="contained" {...rest}>
      {children}
      {btnText}
    </Button>
  );
};

export default IconBtn;
