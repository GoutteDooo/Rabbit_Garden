const possibleColors = [
  "wheat",
  "teal",
  "forestgreen",
  "rebeccapurple",
  "dimgray",
  "brown",
];
const possibleMaleNames = [
  "José",
  "Jean",
  "Pierre",
  "Paul",
  "Emmanuel",
  "François",
  "Marc",
  "Jean-Pierre",
];
const possibleFemaleNames = [
  "Marie",
  "Anne",
  "Marie-Pierre",
  "Catherine",
  "Sophie",
  "Charlotte",
  "Hélène",
  "Isabelle",
];

class RabbitData {
  age = 0; // en demi-minutes. Un lapin vie 10 demi-minutes (5min)
  color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
  gender = Math.random() < 0.5 ? "male" : "female";
  name =
    this.gender === "male"
      ? possibleMaleNames[Math.floor(Math.random() * possibleMaleNames.length)]
      : possibleFemaleNames[
          Math.floor(Math.random() * possibleFemaleNames.length)
        ];
  height = this.gender === "male" ? 100 : 50;
  position = { x: Math.random() * 1120, y: Math.random() * 700 };

  grow() {
    this.age += Math.ceil(this.height / 100);
  }

  walk() {
    this.position.x += Math.random() * 100 - 50;
    this.position.y += Math.random() * 100 - 50;
  }
}

export default RabbitData;
