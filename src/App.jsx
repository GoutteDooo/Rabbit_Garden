import React, { useEffect, useState } from 'react'
import Garden from './components/Garden.jsx'
import RabbitData from './classes/RabbitData';

function App() {
  const [rabbits, setRabbits] = useState([]);
  const [positions, setPositions] = useState({});
  const [countId, setCountId] = useState(1);

  const createRabbit = () => {
    const rabbit = new RabbitData();
    if (rabbits.find((r) => r.name === rabbit.name)) {
      rabbit.name += countId;
      setCountId(countId + 1);
    }
    setRabbits([...rabbits, rabbit]);
    setPositions((prev) => ({...prev, [rabbit.name]: rabbit.position}));
  };

  const updatePosition = (name, newPosition) => {
    setPositions((prev) => ({...prev, [name]: newPosition}));
  }

  const handleCollision = (rabbitAName, rabbitBName) => {
    const mergedRabbit = mergeRabbits(rabbitAName, rabbitBName);
    console.log("handleCollision, rabbits name : ", rabbitAName, rabbitBName);
    setRabbits((prevRabbits) => prevRabbits.filter((rabbit) => rabbit.name !== rabbitAName && rabbit.name !== rabbitBName).concat(mergedRabbit));
    setPositions((prevPositions) => {
      const updatedPositions = {...prevPositions};
      delete updatedPositions[rabbitAName];
      delete updatedPositions[rabbitBName];
      return {...updatedPositions, [mergedRabbit.name]: mergedRabbit.position};
    });
  }

  const mergeRabbits = (rabbitAName, rabbitBName) => {
    const rabbitA = rabbits.find((rabbit) => rabbit.name === rabbitAName);
    const rabbitB = rabbits.find((rabbit) => rabbit.name === rabbitBName);
    const rabbitAPos = positions[rabbitAName];
    const rabbitBPos = positions[rabbitBName];

    console.log("positions des lapins a merger : ", rabbitAPos, rabbitBPos);
    const newName = rabbitA.name.split("").filter((_, i) => i % 2 !== 0).join("") + rabbitB.name.split("").filter((_, i) => i % 2 === 0).join("");
    const newAge = rabbitA.age + rabbitB.age;
    const newHeight = rabbitA.height + rabbitB.height;
    const newPosition = {x: (rabbitAPos.x + rabbitBPos.x)/2, y: (rabbitAPos.y + rabbitBPos.y)/2};
    return new RabbitData(newName, newAge, rabbitA.color, rabbitA.gender, newHeight, newPosition );
  }

/*
  useEffect(() => {
    console.log("Tableau des Lapins : ",rabbits);
    console.log("Positions des Lapins : ",positions);
  }, [rabbits, positions])
*/

  return (
    <>
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
        <Garden rabbits={rabbits} positions={positions} updatePosition={updatePosition} handleCollision={handleCollision} />
    </>
  )
}

export default App
