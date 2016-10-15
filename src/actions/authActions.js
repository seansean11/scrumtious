import JiraApi from '../services/JiraApi';
import * as types from './actionTypes';

function loginRequest(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    errorMessage: false
  };
}

function loginFailure(errorMessage) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    errorMessage
  };
}

function logoutRequest() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// { username, password, domain: 'dev-msi.atlassian.net' }
export function loginUser(creds, router) {
  return dispatch => {
    dispatch(loginRequest(creds));

    return JiraApi.login(creds)
      .then(response => {
        localStorage.setItem('session', JSON.stringify(response));
        dispatch(loginSuccess(response));
        router.push('/');
      })
      .catch(err => {
        dispatch(loginFailure(err));
      });
  };
}
