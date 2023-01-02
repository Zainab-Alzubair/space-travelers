import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => {
  const links = [
    {
      id: 0,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 1,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 2,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <header>
      <div className="logo-container">
        <img alt="Space Travelers Logo" src={planet} className="logo" />
        <h1 className="app-title">{'Space Traveler\'s Hub'}</h1>
      </div>
      <nav>
        <ul className="nav-links-container">
          {
            links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
