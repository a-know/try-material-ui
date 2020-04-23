import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices/reducers';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../slices/reducers', () => {
    const nextReducer = rootReducer;
    store.replaceReducer(nextReducer);
  });
}

export default store;
