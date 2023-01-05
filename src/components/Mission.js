import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missons/actions/missionActions';

const Mission = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();
  const renderList = missions.map((mission) => {
    const { name, id, description } = mission;

    const clickHandler = () => {
      dispatch(joinMission(mission.id));
    };

    return (
      <table className="table" key={id}>
        <tbody>
          <tr className="row">
            <td className="column name">{name}</td>
            <td className="column description">{description}</td>
            <td className="column status_column">
              <p className="status">NOT A MEMBER</p>
            </td>
            <td className="column column_button">
              <button type="button" className="button" onClick={clickHandler}>Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
  return (
    <>{renderList}</>
  );
};

export default Mission;
