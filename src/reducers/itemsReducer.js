import * as types from '../actions/actionTypes';

export function items(state = [], action) {
  switch (action.type) {
    case types.ITEMS_ADD:
      return [
        ...action.items,
        ...state
      ];
    case types.ITEM_ADD:
      return [
        action.item,
        ...state
      ];
    case types.ITEM_DELETE:
      return state.filter(item =>
        item.id !== action.id
      );
    case types.ITEM_EDIT:
      return state.map(item =>
        (item.id === action.item.id ?
          action.item :
          item)
      );
    case types.ITEM_MOVE: // eslint-disable-line no-case-declarations
      const newState = [].concat(state);
      newState.splice(action.toIndex, 0, newState.splice(action.fromIndex, 1)[0]);
      return newState;
    default:
      return state;
  }
}

export function activeItem(state = {}, action) {
  switch (action.type) {
    case types.ITEM_ACTIVATE:
      return action.item;
    default:
      return state;
  }
}
