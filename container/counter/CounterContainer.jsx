import React, { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/CounterComponent';
import { increment, decrement } from '../../slices/counter';

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
    
const CounterContainer = () => {
  const counterActions = useActions({ increment, decrement });
  const counter = useSelector(state => state.counter);

  useEffect(() => {
    console.log('CounterContainer:useEffectによる初回処理');
  }, []);
  return (
    <div>
      <Counter counter={counter} counterActions={counterActions} />
    </div>
  );
};

export default CounterContainer;
