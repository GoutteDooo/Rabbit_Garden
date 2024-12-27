import React, { useEffect } from 'react';
import Rabbit from '../classes/Rabbit';

const Garden = ({rabbits}) => {
    useEffect(() => {
        console.log(rabbits);
    }, [rabbits]);
    
    return (
        <div className='garden'>
            {rabbits && rabbits.map((rabbit, id) => rabbit.render(id))}
        </div>
    );
};

export default Garden;