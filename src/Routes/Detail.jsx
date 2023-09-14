import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { dentistId } = useParams(); // Obtener el ID desde la ruta
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistId}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error("There was an error fetching the data", error));
  }, [dentistId]);

  // Verificar si los datos aún no se han cargado
  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Telefono: {dentist.phone}</p>
      <p>Sitio web: <a href={dentist.website}>{dentist.website}</a></p>
    </div>
  );
}

export default Detail;