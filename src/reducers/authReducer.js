import * as types from '../actions/actionTypes';

// eslint-disable-next-line no-unneeded-ternary
const isAuthenticated = localStorage.getItem('session') ? true : false;

export default function auth(state = { isFetching: false, isAuthenticated }, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.creds
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.errorMessage
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.errorMessage
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      });
    default:
      return state;
  }
}
