var dasha = {
    name: 'Dasha',
    age: 18
};

var leo = {
    name: 'Leo',
    age: 100500
};

console.log(dasha);
console.log(leo);

function Animal(name) {
  this.name = name;
  this.canWalk = true;
}

var animal = new Animal("ёжик");

console.log(animal);