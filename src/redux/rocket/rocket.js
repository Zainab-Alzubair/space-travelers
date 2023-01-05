import Axios from 'axios';

const FETCH_ROCKETS = 'space-travelers/rockets/FETCH_ROCKETS';
const RESERVE_ROCKETS = 'space-travelers/rockets/RESERVE_ROCKETS';

const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const reserveRockets = (payload) => ({
  type: RESERVE_ROCKETS,
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  const returnValue = await Axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = returnValue;

  const rockets = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].rocket_name;
    const { id } = data[i];
    const { description } = data[i];
    const image = data[i].flickr_images[0];
    const reserved = false;
    const object = {
      id, name, description, image, reserved,
    };
    rockets.push(object);
  }
  dispatch(fetchRockets(rockets));
};

const bookRockets = (state, payload) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS:
      return bookRockets(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
