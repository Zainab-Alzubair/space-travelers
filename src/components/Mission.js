import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission: { name, description } } = props;
  return (
    <table className="table">
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
};

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default Mission;
