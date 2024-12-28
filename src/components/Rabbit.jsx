import React from 'react';

const Rabbit = ({rabbit}) => {
    return (
        <div
            className="rabbit"
            style={{
                position: 'absolute',
                left: `${rabbit.position.x}px`,
                top: `${rabbit.position.y}px`,
                backgroundColor: rabbit.color,
                height: `${rabbit.height}px`,
                width: `${rabbit.height}px`,
                border: rabbit.gender === 'male' ? '2px solid black' : '',
            }}
        >
            <p>{rabbit.name}</p>
            <p>{rabbit.age}</p>
        </div>
    );
};

export default Rabbit;