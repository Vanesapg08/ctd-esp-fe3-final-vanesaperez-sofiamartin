import React, {useEffect, useState, useContext } from 'react'
import Card from '../Components/Card';
import { AppContext } from '../App';
import "./Home.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {darkMode, setDarkMode} = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setUsers(response);
        setLoading(false);
      })
      .catch(error => {
        console.error("Hubo un error al cargar los datos:", error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Cargando...</p>;
  return (
    <main className="home" data-theme={darkMode ? 'dark' : ''} >
      <h1>Home</h1>
      <div className='card-grid'>
      {users.map(user => (
        <Card key={user.id} name={user.name} username={user.username} id={user.id} />
      ))}
      </div>
    </main>
  )
}

export default Home