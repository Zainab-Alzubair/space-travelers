import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './reducers/missionReducer';

const reducers = combineReducers({
  allMissions: missionReducer,
});

const store = configureStore(
  { reducer: reducers },
  applyMiddleware(logger, thunk),
);

export default store;
