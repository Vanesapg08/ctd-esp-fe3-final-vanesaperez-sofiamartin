import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { AppContext } from "../App";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {darkMode, setDarkMode} = useContext(AppContext);
  const [favs, setFavs] = useState([]); // Estado local para almacenar los favoritos

  useEffect(() => {
    // Recupera los favoritos del localStorage al montar el componente
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || {};
    setFavs(Object.values(storedFavs)); // Convierte el objeto en un array para renderizarlo más fácilmente
  }, []);

  return (
    <div className="favs" data-theme={darkMode ? 'dark' : ''}>
      <h1>Dentists Favs</h1>
      <div className={`card-grid`}>
        {favs.map(fav => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
