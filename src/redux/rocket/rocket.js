import Axios from 'axios';

const FETCH_ROCKETS = 'space-travelers/rockets/FETCH_ROCKETS';

const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  const data = await Axios.get('https://api.spacexdata.com/v3/rockets');

  const rockets = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].rocket_name;
    const { id } = data[i];
    const { description } = data[i];
    const image = data[i].flickr_images[0];
    const object = {
      id, name, description, image,
    };
    rockets.push(object);
  }
  dispatch(fetchRockets(rockets));
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
