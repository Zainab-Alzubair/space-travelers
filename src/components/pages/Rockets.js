import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../Rocket';
import { fetchRocketsApi } from '../../redux/rocket/rocket';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rocketsData.length === 0) {
      dispatch(fetchRocketsApi());
    }
  }, [dispatch]);
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
