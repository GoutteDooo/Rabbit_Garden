import React, { useEffect, useState } from 'react';

const Rabbit = ({rabbit}) => {
    const [position, setPosition] = useState(rabbit.position);

    useEffect(() => {
        const interval = setInterval(() => {
            const newX = Math.max(0, Math.min(position.x + Math.floor(Math.random() * 100 - 50), 400)); // Limite dans le jardin
            const newY = Math.max(0, Math.min(position.y + Math.floor(Math.random() * 100 - 50), 400));
            setPosition({ x: newX, y: newY });
        }, Math.random() * 2000 + 1000); // Intervalle aléatoire entre 1s et 3s

        return () => clearInterval(interval); // Nettoie l'intervalle au démontage
    },[position])
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