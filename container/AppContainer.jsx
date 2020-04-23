import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';

import Header from '../components/HeaderComponent';
import TopContainer from './top/TopContainer';
import LoginContainer from './login/LoginContainer';
import CounterContainer from './counter/CounterContainer';
import SampleContainer from './sample/SampleContainer';
import NotFound from './NotFound';

const theme = createMuiTheme({
  palette: {
    primary: Colors.lightBlue,
    secondary: Colors.yellow,
  },
});

const AppContainer = () => {
  useEffect(() => {
    console.log('AppContainer:useEffectによる初回処理');
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <div id="contents">
          <Router>
            <Switch>
              <Route path="/" exact>
                <TopContainer />
              </Route>
              <Route path="/login" exact>
                <LoginContainer />
              </Route>
              <Route path="/counter" exact>
                <CounterContainer />
              </Route>
              <Route path="/sample" exact>
                <SampleContainer />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default AppContainer;