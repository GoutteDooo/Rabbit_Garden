import React from 'react';

const possibleColors = ["white", "red", "blue", "green", "yellow", "black", "grey","brown"];
const possibleMaleNames = ["José", "Jean", "Pierre", "Paul","Emmanuel", "François", "Marc", "Jean-Pierre"];
const possibleFemaleNames = ["Marie", "Anne", "Marie-Pierre", "Catherine", "Sophie", "Charlotte", "Hélène", "Isabelle"];

class Rabbit {
    age = 0;// en demi-minutes. Un lapin vie 10 demi-minutes (5min)
    color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    gender = Math.random() < 0.5 ? "male" : "female";
    name = this.gender === "male" ? possibleMaleNames[Math.floor(Math.random() * possibleMaleNames.length)] : possibleFemaleNames[Math.floor(Math.random() * possibleFemaleNames.length)];
    walk() {
        console.log("Le lapin se promène");
    }
    randomWalk() {
        const rng = (Math.random() + 1) * 5000; // entre 1 et 10 secondes
        setTimeout(() => {
            this.walk();
            this.randomWalk();
        }, rng);
    }
    render(id) {
        return (
            <div className='rabbit' key={id}>
                <p>{this.name}</p>
                <p>{this.age}</p>
            </div>
        );
    }
};

export default Rabbit;