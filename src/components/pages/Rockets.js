import React from 'react';
import Rocket from '../Rocket';

const Rockets = () => {
  const rocketsData = [
    {
      id: 0,
      name: 'Lorem 1',
      image: 'https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-970-80.jpg.webp',
      description: 'Lorem 1',
    },
    {
      id: 1,
      name: 'Lorem 2',
      image: 'https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-970-80.jpg.webp',
      description: 'Lorem 2',
    },
    {
      id: 2,
      name: 'Lorem 3',
      image: 'https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-970-80.jpg.webp',
      description: 'Lorem 3',
    },
  ];
  return (
    <main>
      {
        rocketsData.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))
      }
    </main>
  );
};

export default Rockets;
