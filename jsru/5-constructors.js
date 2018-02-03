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

var obj = {
    name: 'Dasha',
    lastName: 'Kim',
    fullName: '...',
};
obj['age'] = '13';
obj.fullName = 'Daria Kim'
console.log(obj.likes);
obj.likes = '13';
var nd = Object.getOwnPropertyDescriptor(obj, 'name');
var ad = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(nd, ad);
//Object.defineProperties(obj, props)