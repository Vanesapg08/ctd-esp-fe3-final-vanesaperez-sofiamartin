import React, { useState, useEffect, useContext } from 'react';
import './Card.css';
import { AppContext } from '../App';

const Card = ({ name, username, id,  }) => {
  const {darkMode, setDarkMode} = useContext(AppContext);
  
  // Estado para saber si esta tarjeta es favorita o no
  const [isFav, setIsFav] = useState(false);

  // Consulta a localStorage cuando el componente se monta y actualiza
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || {};
    setIsFav(!!favs[id]); // Si esta tarjeta está en favs, setIsFav a true, sino a false
  }, [id]);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || {};
    favs[id] = { name, username, id }; // Guarda esta tarjeta en el objeto favs
    localStorage.setItem('favs', JSON.stringify(favs));
    setIsFav(true);
  };

  const removeFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || {};
    delete favs[id]; // Elimina esta tarjeta del objeto favs
    localStorage.setItem('favs', JSON.stringify(favs));
    setIsFav(false);
  };

  return (
    <div className="card" data-theme={darkMode ? 'dark' : ''}>
      <img src='/images/doctor.jpg' alt={`Imagen de ${name}`} />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>ID: {id}</p>

      {/* En base al estado isFav, muestra el botón correspondiente */}
      {isFav ? (
        <button onClick={removeFav} className={`favButton ${darkMode ? 'dark' : ''}`}>⛔ Quitar de fav</button>
      ) : (
        <button onClick={addFav} className={`favButton ${darkMode ? 'dark' : ''}`}>💛 Add fav</button>
      )}
    </div>
  );
};

export default Card;