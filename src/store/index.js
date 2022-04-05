import { createStore, combineReducers } from 'redux';
import tasks from './tasks.reducer';
import users from './users.reducer';

const reducer = combineReducers({
  tasks: tasks,
  users: users
});

const store = createStore(reducer);

export default store;