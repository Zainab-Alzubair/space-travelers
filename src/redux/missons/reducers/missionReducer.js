import ActionTypes from '../constants/action-type';

const initialState = {
  missions: [],
};
const missionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MISSIONS:
      return { ...state, missions: payload };
    case ActionTypes.MISSION_JOINED:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== payload) {
            return mission;
          }

          return {
            ...mission,
            joined: true,
          };
        }),
      };
    default:
      return state;
  }
};
export const joinedMissions = (state) => state.missionReducer.missions;

export default missionReducer;
