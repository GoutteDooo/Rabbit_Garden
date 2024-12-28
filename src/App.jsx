import React, { useEffect, useState } from 'react'
import Garden from './components/Garden.jsx'
import RabbitData from './classes/RabbitData';

function App() {
  const [rabbits, setRabbits] = useState([]);
  const [positions, setPositions] = useState({});

  const createRabbit = () => {
      const rabbit = new RabbitData();
      setRabbits([...rabbits, rabbit]);
      setPositions((prev) => ({...prev, [rabbit.name]: rabbit.position}));
  };

  const updatePosition = (name, newPosition) => {
    setPositions((prev) => ({...prev, [name]: newPosition}));
  }

  

  return (
    <>
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
        <Garden rabbits={rabbits} positions={positions} updatePosition={updatePosition} />
    </>
  )
}

export default App
