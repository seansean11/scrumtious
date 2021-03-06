import * as types from './actionTypes';

export function itemsAdd(items) {
  return {
    type: types.ITEMS_ADD,
    items
  };
}

export function itemAdd(item) {
  return {
    type: types.ITEM_ADD,
    item
  };
}

export function itemDelete(index) {
  return {
    type: types.ITEM_DELETE,
    index
  };
}

export function itemEdit(item) {
  return {
    type: types.ITEM_EDIT,
    item
  };
}

export function itemMove(fromIndex, toIndex) {
  return {
    type: types.ITEM_MOVE,
    fromIndex,
    toIndex
  };
}

export function itemActivate(item) {
  return {
    type: types.ITEM_ACTIVATE,
    item
  };
}
