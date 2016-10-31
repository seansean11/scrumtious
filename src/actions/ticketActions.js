import JiraApi from '../services/JiraApi';
import * as types from './actionTypes';

function ticketsRequest(username) {
  return {
    type: types.TICKETS_REQUEST,
    isFetching: true,
    username
  };
}

function ticketsSuccess(tickets) {
  return {
    type: types.TICKETS_SUCCESS,
    isFetching: true,
    tickets
  };
}

function ticketsFailure(errorMessage) {
  return {
    type: types.TICKETS_FAILURE,
    isFetching: true,
    errorMessage
  };
}

export function getUserTickets(session) {
  if (session.isAuthenticated) {
    return dispatch => {
      dispatch(ticketsRequest(session.user.username));

      return JiraApi.getUserTickets(session.user)
        .then(response => {
          dispatch(ticketsSuccess(response.issues));
        })
        .catch(err => {
          dispatch(ticketsFailure(err));
        });
    };
  }
}

export function ticketsActivate(ticket) {
  return {
    type: types.TICKETS_ACTIVATE,
    ticket
  };
}

export function ticketsDeactivate(ticket) {
  return {
    type: types.TICKETS_DEACTIVATE,
    ticket
  };
}

export function ticketsDeactivateAll() {
  return {
    type: types.TICKETS_DEACTIVATE_ALL
  };
}
