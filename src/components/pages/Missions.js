import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Mission from '../Mission';
import setMissions from '../../redux/missons/actions/missionActions';

const Missions = () => {
  const dispatch = useDispatch();

  const fetchMissions = async () => {
    const response = await axios
      .get('http://api.spacexdata.com/v3/missions');
    dispatch(setMissions(response.data));
  };
  useEffect(() => {
    fetchMissions();
  }, []);

  return (

    <div className="mission__container">
      <table className="table">
        <thead>
          <tr className="row">
            <th className="column head">Mission</th>
            <th className="column head">Description</th>
            <th className="column head">Status</th>
            <th className="column head"> </th>
          </tr>
        </thead>
      </table>

      <Mission />

    </div>

  );
};

export default Missions;
