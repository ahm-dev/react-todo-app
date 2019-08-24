// External dependencies
import React from 'react';
import Grid from '@material-ui/core/Grid';

const Content = props => {
  const { children } = props;

  return (
    <div className="flex-grow">
      <Grid container>
        <Grid item xs={2}></Grid> {/* empty - serves as offset */}
        <Grid item xs={8} className="mt-44">
          {children}
        </Grid>
        <Grid item xs={2}></Grid> {/* empty - consistency */}
      </Grid>
    </div>
  );
};

export default Content;
