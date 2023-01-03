import ActionTypes from '../constants/action-type';

const initialState = {
  missions: [],
};
const missionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MISSIONS:
      return { ...state, missions: payload };
    default:
      return state;
  }
};

export default missionReducer;
