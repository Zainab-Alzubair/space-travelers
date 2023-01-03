import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setMissions from './missons/actions/missionActions';

const MissionListing = () => {
  const dispatch = useDispatch();
  const fetchMissions = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/missions');
    dispatch(setMissions(response.data));
  };

  useEffect(() => {
    fetchMissions();
  }, []);
};

export default MissionListing;
