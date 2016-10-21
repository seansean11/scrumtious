import * as types from '../actions/actionTypes';

function normalizeTicket(ticket) {
  return {
    id: ticket.id || '',
    key: ticket.key || '',
    description: ticket.fields.description || '',
    summary: ticket.fields.summary || '',
    displayName: ticket.fields.creator.displayName || '',
    avatar_sm: ticket.fields.creator.avatarUrls['16x16'] || '',
    avatar_md: ticket.fields.creator.avatarUrls['24x24'] || '',
    avatar_lg: ticket.fields.creator.avatarUrls['32x32'] || '',
    avatar_xl: ticket.fields.creator.avatarUrls['48x48'] || ''
  };
}

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
        tickets: action.tickets.map(ticket => normalizeTicket(ticket))
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
