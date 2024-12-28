import React, { useEffect } from 'react';
import Rabbit from '../components/Rabbit.jsx';

const Garden = ({rabbits, positions, updatePosition}) => {
    return (
        <div className='garden'>
            {rabbits && rabbits.map((rabbit, id) => (
                <Rabbit 
                key={id} 
                rabbit={rabbit} 
                allPositions={positions}
                updatePosition={updatePosition}
                />
                ))}
        </div>
    );
};

export default Garden;