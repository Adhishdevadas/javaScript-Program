
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
}


class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); 
    }


    displayInfo() {
        console.log(`Dog - Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`);
    }
}


class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); // Cat will always have 4 legs
    }


    displayInfo() {
        console.log(`Cat - Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`);
    }
}


const myDog = new Dog('Buddy', 5, 'Brown');
const myCat = new Cat('Whiskers', 3, 'Gray');

myDog.displayInfo(); 
myCat.displayInfo(); 

