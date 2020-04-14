import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../stores/configureStore';
import App from '../container/AppContainer';

const stores = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={stores}>
      <div>
        <App />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
};

render();
