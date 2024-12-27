import React, { useEffect } from 'react';
import Rabbit from '../classes/Rabbit';

const CreateRabbit = () => {
    const [rabbits, setRabbits] = React.useState([]);

    const createRabbit = () => {
        const rabbit = new Rabbit();
        setRabbits([...rabbits, rabbit]);
    };

    return (
        <button className='createRabbit' onClick={createRabbit}>Créer un Lapin</button>
    );
};
export default CreateRabbit;