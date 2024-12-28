import React, { useEffect, useState } from 'react'
import Garden from './components/Garden.jsx'
import RabbitData from './classes/RabbitData';

function App() {
  const [rabbits, setRabbits] = useState([]);

  const createRabbit = () => {
      const rabbit = new RabbitData();
      setRabbits([...rabbits, rabbit]);
  };

  return (
    <>
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
        <Garden rabbits={rabbits} />
    </>
  )
}

export default App
