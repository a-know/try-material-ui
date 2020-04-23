import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import stores from '../stores';
import App from '../container/AppContainer';

import './css/main.css';

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
