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

  const mergeRabbits = (rabbitAName, rabbitBName) => {
    const rabbitA = rabbits.find((rabbit) => rabbit.name === rabbitAName);
    const rabbitB = rabbits.find((rabbit) => rabbit.name === rabbitBName);
    console.log("Merging en cours... deux lapins concernés : ", rabbitA.name , " et ", rabbitB.name);
    const newName = rabbitA.name.split("").filter((_, i) => i < 3).join("") + rabbitB.name.split("").filter((_, i) => i < 3).join("");
    const newAge = rabbitA.age + rabbitB.age;
    const newHeight = rabbitA.height + rabbitB.height;
    const newPosition = {x: (rabbitA.position.x + rabbitB.position.x)/2, y: (rabbitA.position.y + rabbitB.position.y)/2};
    return new RabbitData(newName, newAge, rabbitA.color, rabbitA.gender, newHeight, newPosition );
  }

  const handleCollision = (rabbitA, rabbitB) => {
    const mergedRabbit = mergeRabbits(rabbitA, rabbitB);
    setRabbits((prevRabbits) => prevRabbits.filter((rabbit) => rabbit.name !== rabbitA.name && rabbit.name !== rabbitB.name).concat(mergedRabbit));
  }


  return (
    <>
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
        <Garden rabbits={rabbits} positions={positions} updatePosition={updatePosition} handleCollision={handleCollision} />
    </>
  )
}

export default App
