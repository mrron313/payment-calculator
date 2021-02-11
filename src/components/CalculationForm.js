
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import Divider from '@material-ui/core/Divider';
import DarkModeToggle from "react-dark-mode-toggle";
import { toggleThemeMode } from '../redux/actions';
import { connect } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    header:{
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2),
      fontSize: "24px",
      display: 'flex',
      justifyContent: 'space-between',
    },
    headerText:{
      fontSize: "24px",
      margin: "0px"
    },
    toggle: {
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        marginBottom: theme.spacing(3),
        borderTop: "1px solid #53ade0",
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

function CalculationForm(props) {
  const classes = useStyles();
  const { toggleThemeMode, isDarkMode } = props;
  const [dark, setDark] = useState(isDarkMode);

  const handleToggleThemeMode = () => {
    setDark(!dark);
    toggleThemeMode(!dark);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
          <div className={classes.header}>
              <h2 className={classes.headerText}>
                Payment Calculator 
              </h2>
              <DarkModeToggle
                className={classes.toggle}
                onChange={handleToggleThemeMode}
                checked={dark}
                size={50}
              />
          </div>
          <Divider />
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
            </Typography>
            <React.Fragment>
              <Form />
            </React.Fragment>
          </Paper>
          <Copyright />
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode
});

export default connect(
  mapStateToProps,
  { toggleThemeMode }
)(CalculationForm)