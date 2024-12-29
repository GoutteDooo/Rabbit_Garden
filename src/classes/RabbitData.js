class RabbitData {
  constructor(
    name = null,
    age = 0,
    color = RabbitData.randomColor(),
    gender = RabbitData.randomGender(),
    height = gender === "male" ? 100 : 50,
    position = RabbitData.randomPosition()
  ) {
    this.name = name
      ? name
      : gender === "male"
      ? RabbitData.randomMaleName()
      : RabbitData.randomFemaleName();
    this.age = age;
    this.color = color;
    this.gender = gender;
    this.height = height;
    this.position = position;
  }

  static randomMaleName() {
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
    return possibleMaleNames[
      Math.floor(Math.random() * possibleMaleNames.length)
    ];
  }

  static randomFemaleName() {
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
    return possibleFemaleNames[
      Math.floor(Math.random() * possibleFemaleNames.length)
    ];
  }

  static randomColor() {
    const possibleColors = [
      "orangered",
      "royalblue",
      "forestgreen",
      "indigo",
      "gold",
      "brown",
    ];
    return possibleColors[Math.floor(Math.random() * possibleColors.length)];
  }

  static randomGender() {
    return Math.random() < 0.5 ? "male" : "female";
  }

  static randomPosition() {
    return {
      x: Math.floor(Math.random() * 1020),
      y: Math.floor(Math.random() * 600),
    };
  }

  grow() {
    this.age += Math.ceil(this.height / 100);
  }

  walk() {
    const newXPosition = Math.round(
      Math.random() * (this.height / 10) - this.height / 20
    );
    const newYPosition = Math.round(
      Math.random() * (this.height / 10) - this.height / 20
    );
    this.position.x +=
      this.position.x + newXPosition < 0
        ? 0
        : this.position.x + newXPosition > 1120
        ? 1120
        : newXPosition;
    this.position.y +=
      this.position.y + newYPosition < 0
        ? 0
        : this.position.y + newYPosition > 700
        ? 700
        : newYPosition;
  }
}

export default RabbitData;
