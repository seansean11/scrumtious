import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/login/LoginPage';
import BucketPage from './components/bucket/BucketPage';
import { remote } from 'electron';

const win = remote.getCurrentWindow();

export default (store) => {
  function requireAuth(nextState, replace) {
    const state = store.getState();

    if (!state.auth.isAuthenticated) {
      console.log(store);
      replace('/login');
      win.setSize(555, 535, true);
    } else {
      win.setSize(1000, 800, true);
    }
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={BucketPage} onEnter={requireAuth} />
      <Route path="/login" component={LoginPage} />
    </Route>
  );
};
