/* eslint no-confusing-arrow: 0 */

import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.TODOS_ADD:
      return [
        ...action.todos.map(todo =>
          Object.assign({}, todo, { done: false })
        ),
        ...state
      ];
    case types.TODO_ADD:
      return Object.assign({}, state, [
        ...todos,
        action.todo
      ]);
    case types.TODOS_DELETE:
      return Object.assign({}, state, {
        todos: []
      });
    case types.TODOS_EDIT:
      return state.map(todo =>
        todo.id === action.todo.id ?
          Object.assign({}, todo, action.todo) :
          todo
      );
    default:
      return state;
  }
}
