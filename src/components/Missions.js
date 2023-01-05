import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Mission from './pages/Mission';
import setMissions from '../redux/missons/actions/missionActions';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missionReducer.missions);
  const fetchMissions = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/missions');

    const { data } = response;

    const missions = [];
    data.map((mission) => {
      const name = mission.mission_name;
      const id = mission.mission_id;
      const { description } = mission;
      const joined = false;

      const obj = {
        id, name, description, joined,
      };
      missions.push(obj);
      return mission;
    });

    dispatch(setMissions(missions));
  };
  useEffect(() => {
    if (missionsData.length === 0) {
      fetchMissions();
    }
    // eslint-disable-next-line
  }, []);

  return (

    <div className="mission__container">
      <table className="table">
        <thead>
          <tr className="header-row">
            <th className="column head">Mission</th>
            <th className="column head">Description</th>
            <th className="column head">Status</th>
            <th className="column head"> </th>
          </tr>
        </thead>
        <Mission />
      </table>

    </div>

  );
};

export default Missions;
