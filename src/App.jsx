import React, { useEffect, useState } from 'react'
import Garden from './components/Garden.jsx'
import RabbitData from './classes/RabbitData';

function App() {
  const [rabbits, setRabbits] = useState([]);

  const createRabbit = () => {
      const rabbit = new RabbitData();
      setRabbits([...rabbits, rabbit]);
  };

  const moveRabbit = (rabbitName) => {
    setRabbits((prevRabbits) => prevRabbits.map((rabbit) => rabbit.name === rabbitName ? {... rabbit, position: rabbit.walk()} : rabbit));
  }

  useEffect(() => {
      const interval = setInterval(() => {
          rabbits.forEach((rabbit) => {
            moveRabbit(rabbit.name);
          });
      }, 1000);

      return () => clearInterval(interval);
  }, [rabbits]);

  return (
    <>
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
        <Garden rabbits={rabbits} />
    </>
  )
}

export default App
