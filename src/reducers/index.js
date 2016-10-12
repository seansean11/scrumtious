import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './authReducer';
import tickets from './ticketsReducer';
import items from './itemsReducer';
import activeItems from './activeItemsReducer';

const rootReducer = combineReducers({
  auth,
  tickets,
  items,
  activeItems,
  routing
});

export default rootReducer;
