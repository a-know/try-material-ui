import React, { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/HeaderComponent';
import Counter from '../components/CounterComponent';
import CounterActions from '../actions/counter';

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

const AppContainer = (props) => {
  const counterActions = useActions(CounterActions);
  const counter = useSelector(state => state.counter);

  const _counterProps = { counter, counterActions, ...props };
  return (
    <div>
      <Header />
      <Counter {..._counterProps} />
    </div>
  );
};

export default AppContainer;