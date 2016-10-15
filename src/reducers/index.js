import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './authReducer';
import tickets from './ticketsReducer';
import { items, activeItem } from './itemsReducer';

const rootReducer = combineReducers({
  auth,
  tickets,
  items,
  activeItem,
  routing
});

export default rootReducer;
