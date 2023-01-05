import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missons/actions/missionActions';

const Mission = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();
  const renderList = missions.map((mission) => {
    const {
      name, id, description, joined,
    } = mission;

    const clickHandler = () => {
      dispatch(joinMission(mission.id));
    };

    return (

      <tbody key={id}>
        <tr className="row">
          <td className="column name">{name}</td>
          <td className="column description">{description}</td>
          <td className="column status_column">
            {!joined
              ? <p className="status">NOT A MEMBER</p>
              : <p className="active-status">Active MEMBER</p>}
          </td>
          <td className="column column_button">
            {!joined ? <button type="button" className="button" onClick={clickHandler}>Join Mission</button>
              : <button type="button" className="leave-btn" onClick={clickHandler}>Leave Mission</button>}

          </td>
        </tr>
      </tbody>

    );
  });
  return (
    <>{renderList}</>
  );
};

export default Mission;
