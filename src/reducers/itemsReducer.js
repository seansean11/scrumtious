/* eslint no-confusing-arrow: 0 */

import * as types from '../actions/actionTypes';

export function items(state = [], action) {
  switch (action.type) {
    case types.ITEMS_ADD:
      return [
        ...action.items.map(item =>
          Object.assign({}, item, { done: false })
        ),
        ...state
      ];
    case types.ITEM_ADD:
      return [
        ...state,
        action.item
      ];
    case types.ITEM_DELETE:
      return state.filter(item =>
        item.id !== action.id
      );
    case types.ITEM_EDIT:
      return state.map(item =>
        item.id === action.item.id ?
          action.item :
          item
      );
    default:
      return state;
  }
}

export function activeItem(state = )