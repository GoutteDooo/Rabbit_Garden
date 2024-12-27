import React, { useEffect, useState } from 'react'
import Garden from './components/Garden.jsx'
import Rabbit from './classes/Rabbit';

function App() {
  const [count, setCount] = useState(0)
  const [rabbits, setRabbits] = useState([]);

  const createRabbit = () => {
      const rabbit = new Rabbit();
      setRabbits([...rabbits, rabbit]);
      setCount(count + 1);
  };

  useEffect(() => {
      console.log(rabbits, count);
  }, [rabbits]);

  return (
    <>
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
        <Garden rabbits={rabbits} />
    </>
  )
}

export default App
