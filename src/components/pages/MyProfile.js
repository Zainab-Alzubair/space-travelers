import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reserved = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missionReducer.missions);
  const joined = missions.filter((mission) => mission.joined);
  return (
    <main className="profile-main">
      <div className="missions-rockets-names">
        <div className="profile-item">
          <h2 className="reservation-title">My Missions</h2>
          <div className="user-reservations-container">
            { joined.length === 0 && <p className="no-reserved">No Joined Missions</p>}
            {joined.map((mission) => (
              <h3 key={mission.id} className="user-reservations">{mission.name}</h3>
            ))}
          </div>
          <div />
        </div>
        <div className="profile-item">
          <h2 className="reservation-title">My Rockets</h2>
          <div className="user-reservations-container">
            { reserved.length === 0 && <p className="no-reserved">No Reserved Rockets</p>}
            {reserved.map((rocket) => (
              <h3 key={rocket.id} className="user-reservations">{rocket.name}</h3>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
