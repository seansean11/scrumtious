import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import debounce from 'debounce';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  window.devToolsExtension ? window.devToolsExtension() : noop => noop
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  const saveState = debounce(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
  }, 1000);

  store.subscribe(() => {
    saveState();
  });

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
