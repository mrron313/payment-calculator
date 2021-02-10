import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const drawerHeight = 80;

const useStyles = makeStyles(theme => ({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: theme.palette.bg,
  },
  contentInner: {
    flex: 1,
    position: 'relative',
    boxSizing: 'border-box',
    minHeight: '100%',
    maxWidth: '100%',
    '& > div': {
      minHeight: '100%',
    },
  },
  '@media(max-width: 850px)': {
    contentInner: {
      padding: `${drawerHeight + 10}px 10px 10px`,
    },
  },
}));

const MainLayout = props => {
  const { children, contentBackground, menuType } = props;
  const classes = useStyles();

  return (
    <div className={clsx('app-wrapper', contentBackground)}>
      <div className={classes.content}>
        <div className={classes.contentInner}>{children}</div>
      </div>
    </div>
  );
};


export default MainLayout;
