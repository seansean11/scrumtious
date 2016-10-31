import * as types from '../actions/actionTypes';

export default function auth(state = { isFetching: false, isAuthenticated: false }, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.errorMessage,
        user: action.user
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
