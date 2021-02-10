import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const drawerHeight = 80;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.bgElements,
  },
  appBarBottom: {
    backgroundColor: theme.palette.bgElements,
    zIndex: theme.zIndex.drawer + 1,
    top: 'auto',
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    height: drawerHeight,
    backgroundColor: theme.palette.bgElements,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.bgElements,
    padding: '0px 5px',
  },
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
    padding: `${drawerHeight + 20}px 20px 20px`,
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
