/* eslint no-confusing-arrow: 0 */

import * as types from '../actions/actionTypes';

export default function items(state = [], action) {
  switch (action.type) {
    case types.ITEMS_ADD:
      return [
        ...action.items.map(item =>
          Object.assign({}, item, { done: false })
        ),
        ...state
      ];
    case types.ITEM_ADD:
      return Object.assign({}, state, [
        ...items,
        action.item
      ]);
    case types.ITEMS_DELETE:
      return Object.assign({}, state, {
        items: []
      });
    case types.ITEMS_EDIT:
      return state.map(item =>
        item.id === action.item.id ?
          Object.assign({}, item, action.item) :
          item
      );
    default:
      return state;
  }
}
