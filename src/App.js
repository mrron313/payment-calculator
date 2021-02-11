import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from "react-router-dom";import './App.css';
import Routes from './Routes';
import {connect} from 'react-redux'

function App(props) {
  const { isDarkMode } = props;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
          <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode
});

export default connect(mapStateToProps, {})(App)
