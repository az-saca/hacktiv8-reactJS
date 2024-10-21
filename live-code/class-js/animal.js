class Animal {
  constructor(name, age, type, faveFoods, totalLegs = 4) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.faveFoods = faveFoods;
    this.totalLegs = totalLegs;
  }

  move() {
    if (this.totalLegs === 0) {
      return "I swim";
    } else {
      return "I run and walk with my legs";
    }
  }

  getInformation(greet) {
    this.move();
    return `${greet}! My name is ${this.name}.<br> Age: ${this.age}. I'm a ${this.type}.<br> My fave foods are ${this.faveFoods}.`;
  }
}

const nemoTheFish = new Animal("Nemo", 1, "Fish", "Algae", 0);
console.log(nemoTheFish); // Mencetak objek
console.log(nemoTheFish.move()); // Mencetak hasil dari metode move()
console.log(nemoTheFish.getInformation("Kiw")); // Mencetak hasil dari metode getInformation()
