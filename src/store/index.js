import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import tasks from './tasks.reducer';
import users from './users.reducer';

const reducer = combineReducers({
  tasks: tasks,
  users: users
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
