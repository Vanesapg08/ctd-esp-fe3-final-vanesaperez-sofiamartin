import React, { useState, useContext } from 'react';
import './Navbar.css';
import { AppContext } from '../App';

function Navbar() {
  const {darkMode, setDarkMode} = useContext(AppContext);

  return (
    <div className={`header ${darkMode ? 'dark' : ''}`}>
      <span className="logo">
        <span className="logo-red">D</span>H Odonto
      </span>

      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/favs">favs</a>
      </div>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
}

export default Navbar;
