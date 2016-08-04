import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './app.global.css';

const hydrate = localStorage.getItem('state') || null;

const store = hydrate ? configureStore(JSON.parse(hydrate)) : configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} router={Router} />
  </Provider>,
  document.getElementById('root')
);
