import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reserved = rockets.filter((rocket) => rocket.reserved);

  return (
    <main>
      <div>
        <h2>My Rockets</h2>
        <div>
          {
            reserved.map((rocket) => (
              <div key={rocket.id} className="user-rockets">{rocket.name}</div>
            ))
          }
        </div>
        <h2>My Missions</h2>
        <div />
      </div>
    </main>
  );
};

export default MyProfile;
