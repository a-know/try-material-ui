import React, { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/HeaderComponent';
import Counter from '../components/CounterComponent';
import { increment, decrement } from '../slices/counter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as Colors from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: Colors.purple,
    secondary: Colors.green,
  },
});

const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
};

const AppContainer = () => {
  // sliceの全てのactionを使う場合は、slice.actionsを渡してもいい
  const counterActions = useActions({ increment, decrement });
  const counter = useSelector(state => state.counter);

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <Counter counter={counter} counterActions={counterActions} />
      </div>
    </MuiThemeProvider>
  );
};

export default AppContainer;