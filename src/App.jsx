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
    setRabbits((prevRabbits) => prevRabbits.map((rabbit) => {
      if (rabbit.name === rabbitName) {
        const newRabbit = Object.create(Object.getPrototypeOf(rabbit));
        Object.assign(newRabbit, rabbit);
        newRabbit.walk();
        return newRabbit;
      }
      return rabbit;
    }));
  }

  useEffect(() => {
    console.log(rabbits);
    const randomTimer = (Math.random()*2 + 5) * 100; // entre 5 et 10 secondes
      const interval = setTimeout(() => {
          rabbits.forEach((rabbit) => {
            moveRabbit(rabbit.name);
          });
      }, randomTimer);

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
