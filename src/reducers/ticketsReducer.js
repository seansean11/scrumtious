import * as types from '../actions/actionTypes';

export default function tickets(state = { tickets: [] }, action) {
  switch (action.type) {
    case types.TICKETS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      });
    case types.TICKETS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        tickets: action.tickets
      });
    case types.TICKETS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        tickets: []
      });
    default:
      return state;
  }
}
