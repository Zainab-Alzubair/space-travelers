import { combineReducers } from 'redux';
import missionReducer from './missionReducer';

const reducers = combineReducers({
  allMissions: missionReducer,
});

export default reducers;
