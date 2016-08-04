import JiraApi from '../api/JiraApi';
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

export function getUserTickets() {
  const session = JSON.parse(localStorage.getItem('session'));

  if (session) {
    return dispatch => {
      dispatch(ticketsRequest(session.username));

      return JiraApi.getUserTickets(session)
        .then(response => {
          dispatch(ticketsSuccess(response.issues));
        })
        .catch(err => {
          dispatch(ticketsFailure(err));
        });
    };
  }
}
