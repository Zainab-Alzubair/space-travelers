import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRockets } from '../redux/rocket/rocket';

const Rocket = (props) => {
  const {
    rocket: {
      id, name, image, description,
    },
  } = props;

  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(reserveRockets(id));
  };
  return (
    <div className="rocket-container">
      <img alt="Rocket" src={image} className="rocket-img" />
      <div className="rocket-info">
        <h3 className="rocket-name">{name}</h3>
        <p className="rocket-description">{description}</p>
        <button type="button" className="reserve-btn" onClick={reserve}>Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Rocket;
