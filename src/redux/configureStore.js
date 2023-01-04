import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './missons/reducers/missionReducer';
import rocketsReducer from './rocket/rocket';

const reducers = combineReducers({
  missionReducer,
  rocketsReducer,
});

const store = configureStore(
  { reducer: reducers },
  applyMiddleware(logger, thunk),
);

export default store;
