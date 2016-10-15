/* eslint no-confusing-arrow: 0 */

import * as types from '../actions/actionTypes';

const blankItem = {
  id: '',
  key: '',
  self: '',
  fields: {
    creator: {
      displayName: '',
      avatarUrls: {
        '16x16': '',
        '24x24': '',
        '32x32': '',
        '48x48': ''
      }
    },
    description: '',
    summary: ''
  }
};

export function items(state = [], action) {
  switch (action.type) {
    case types.ITEMS_ADD:
      return [
        ...action.items.map(item =>
          normalizeItem(item);
        ),
        ...state
      ];
    case types.ITEM_ADD:
      return [
        ...state,
        normalizeItem(action.item)
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

export function activeItem(state = blankItem, action) {
  switch (action.type) {
    case types.ITEM_ACTIVATE:
      return action.item;
    default:
      return state;
  }
}

function normalizeItem(item) {
  return {
    id: item.id || '',
    key: item.key || '',
    description: item.fields.description || '',
    summary: item.fields.summary || '',
    displayName: item.fields.creator.displayName || '',
    avatarUrls: item.fields.creator.avatarUrls || {
      '16x16': '',
      '24x24': '',
      '32x32': '',
      '48x48': ''
    }
  }
}
