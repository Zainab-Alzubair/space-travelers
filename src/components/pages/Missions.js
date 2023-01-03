import React from 'react';
import Mission from '../Mission';

const Missions = () => {
  const missionData = [
    {
      id: 0,
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication',
    },
    {
      id: 1,
      name: 'Telstar',
      description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018.',
    },
    {
      id: 2,
      name: 'Iridium NEXT',
      description: 'n 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites',
    },
  ];
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
      {
    missionData.map((mission) => (
      <Mission
        key={mission.id}
        mission={mission}
      />
    ))
}

    </div>

  );
};

export default Missions;
