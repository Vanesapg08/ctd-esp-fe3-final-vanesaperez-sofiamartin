import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false); // Por defecto es el tema claro

  return (
    <div className={`header ${darkMode ? 'dark' : ''}`}>
      <span className="logo">
        <span className="logo-red">D</span>H Odonto
      </span>

      <div className="nav-links">
        <a href="/">Home</a>
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
