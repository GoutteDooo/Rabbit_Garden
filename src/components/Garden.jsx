import React from 'react';
import Rabbit from '../components/Rabbit.jsx';

const Garden = ({rabbits}) => {
    return (
        <div className='garden'>
            {rabbits && rabbits.map((rabbit, id) => <Rabbit key={id} rabbit={rabbit} />)}
        </div>
    );
};

export default Garden;