import React from 'react';
import { useSelector } from 'react-redux';

const Mission = () => {
  const missions = useSelector((state) => state.allMissions.missions);

  const renderList = missions.map((mission) => {
    const name = mission.mission_name;
    const id = mission.mission_id;
    const { description } = mission;

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
              <button type="button" className="button">Join Mission</button>
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
