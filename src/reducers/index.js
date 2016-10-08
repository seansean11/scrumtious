import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './authReducer';
import tickets from './ticketsReducer';
import items from './itemsReducer';

const rootReducer = combineReducers({
  auth,
  tickets,
  items,
  routing
});

export default rootReducer;
