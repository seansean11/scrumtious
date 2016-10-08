import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/login/LoginPage';
import BucketPage from './components/bucket/BucketPage';
import { remote } from 'electron';

const win = remote.getCurrentWindow();

function requireAuth(nextState, replace) {
  const session = !!localStorage.getItem('session');

  if (!session) {
    replace('/login');
    win.setSize(555, 535, true);
  } else {
    win.setSize(1000, 800, true);
  }
}


export default (
  <Route path="/" component={App}>
    <IndexRoute component={BucketPage} onEnter={requireAuth} />
    <Route path="/login" component={LoginPage} />
  </Route>
);
