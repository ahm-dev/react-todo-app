// External dependencies
import React from 'react';
import Grid from '@material-ui/core/Grid';

const Content = props => {
  const { children } = props;

  return (
    <div className="flex-grow">
      <Grid container>
        <Grid item xs={0} lg={2} /> {/* empty - serves as offset */}
        <Grid item xs={12} lg={8} className="mt-44">
          {children}
        </Grid>
        <Grid item xs={0} lg={2} /> {/* empty - consistency */}
      </Grid>
    </div>
  );
};

export default Content;
