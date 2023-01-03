import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket: { name, image, description } } = props;
  return (
    <div className="rocket-container">
      <img alt="Rocket" src={image} className="rocket-img" />
      <div className="rocket-info">
        <h3 className="rocket-name">{name}</h3>
        <p className="rocket-description">{description}</p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Rocket;
