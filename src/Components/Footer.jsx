import React, { useState, useContext } from 'react';
import './Footer.css';
import { AppContext } from '../App';

function Footer() {
  const {darkMode, setDarkMode} = useContext(AppContext);

  return (
    <>
      <div className="divisor-rojo">
        Hecho por Vanesa Perez & Sofia Martin
      </div>
      <div className={`footer ${darkMode ? 'dark' : ''}`}>

        <img src="/images/DH.png" alt="Logo" className="logo" />

        <div className="social-icons">
          <img src="/images/ico-facebook.png" alt="Facebook" />
          <img src="/images/ico-instagram.png" alt="Instagram" />
          <img src="/images/ico-tiktok.png" alt="TikTok" />
          <img src="/images/ico-whatsapp.png" alt="WhatsApp" />
        </div>
      </div>
    </>
  );
}

export default Footer;
