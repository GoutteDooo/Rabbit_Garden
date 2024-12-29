import React from 'react';
import Rabbit from '../components/Rabbit.jsx';

const Garden = ({rabbits, positions, updatePosition, handleCollision}) => {
    return (
        <div className='garden'>
            {rabbits && rabbits.map((rabbit, id) => (
                <Rabbit 
                key={id} 
                rabbit={rabbit} 
                allPositions={positions}
                updatePosition={updatePosition}
                onCollision={handleCollision}
                />
                ))}
        </div>
    );
};

export default Garden;