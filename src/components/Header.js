import React from 'react';
import planet from '../images/planet.png';

const Header = () => (
  <header>
    <div className="logo-container">
      <img alt="Space Travelers Logo" src={planet} className="logo" />
      <h1 className="app-title">{'Space Traveler\'s Hub'}</h1>
    </div>
    <nav />
  </header>
);

export default Header;
