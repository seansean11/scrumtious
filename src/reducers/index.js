import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './authReducer';
import tickets from './ticketsReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
  auth,
  tickets,
  todos,
  routing
});

export default rootReducer;
