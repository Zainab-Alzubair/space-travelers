import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rocket/rocket';

const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = configureStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
