import ActionTypes from '../constants/action-type';

const setMissions = (missions) => ({
  type: ActionTypes.SET_MISSIONS,
  payload: missions,
});

export default setMissions;
