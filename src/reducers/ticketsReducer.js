import * as types from '../actions/actionTypes';
import { createItem } from '../services/normalizeData';

export function tickets(state = { tickets: [] }, action) {
  switch (action.type) {
    case types.TICKETS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      });
    case types.TICKETS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        tickets: action.tickets.map(ticket => createItem(ticket))
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

export function activeTickets(state = [], action) {
  switch (action.type) {
    case types.TICKETS_ACTIVATE:
      return [
        action.ticket,
        ...state
      ];
    case types.TICKETS_DEACTIVATE:
      return state.filter(ticket =>
        ticket.id !== action.ticket.id
      );
    case types.TICKETS_DEACTIVATE_ALL:
      return [];
    default:
      return state;
  }
}
