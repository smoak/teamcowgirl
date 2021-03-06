import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';
import React, { FC } from 'react';

import EventList from '../EventList';

const styles = (theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(2),
    },
  });

export type PageHomeProps = WithStyles<typeof styles>;

export const PageHome: FC<PageHomeProps> = ({ classes }) => {
  return (
    <div className={classes.main}>
      <EventList />
    </div>
  );
};

export default withStyles(styles)(PageHome);
