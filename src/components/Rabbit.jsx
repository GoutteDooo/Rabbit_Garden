import React, { useEffect, useState } from 'react';

const Rabbit = ({rabbit, allPositions, updatePosition}) => {
    const [position, setPosition] = useState(rabbit.position);

    const detectCollision = () => {
        for (const [name, otherPosition] of Object.entries(allPositions)) {
            if (name !== rabbit.name) {
                const dx = position.x - otherPosition.x;
                const dy = position.y - otherPosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const radius = rabbit.height / 2;
                const otherRadius = 50 / 2; // Exemple pour un rayon fixe
                if (distance <= radius + otherRadius) {
                    console.log(`${rabbit.name} entre en collision avec ${name}`);
                }
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newX = Math.max(0, Math.min(position.x + Math.floor(Math.random() * 100 - 50), 1020)); // Limite dans le jardin
            const newY = Math.max(0, Math.min(position.y + Math.floor(Math.random() * 100 - 50), 600));
            const newPosition = { x: newX, y: newY };
            setPosition(newPosition); // Met à jour localement
            updatePosition(rabbit.name, newPosition); // Signale le déplacement au parent
            detectCollision(); // Vérifie les collisions
        }, Math.random() * 2000 + 1000); // Intervalle aléatoire entre 1s et 3s

        return () => clearInterval(interval); // Nettoie l'intervalle au démontage
    }, [position]); // Déclenche quand les positions changent

    return (
        <div
            className="rabbit"
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
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