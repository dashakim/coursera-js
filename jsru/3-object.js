
var name = "Ivan";
var person = {}; //создаем пустой обьект
person.name = 'Зинаида'; //присвоили свойство  
person.gender = 'female';
person.sayHello = function () {
    console.log("Hello, my name is " + this.name)
}

var person2 = {
    name: 'Зинаида',
    gender: 'female',
    sayHello: function () {
        console.log("Hello, my name is " + person2.name)
    }
}

delete person.gender; // удалили свойство(осталось имя)

console.log( person.name + ' : ' +person.gender );

if ('name' in person) {
    console.log("Таки да");
}

/*var person = {};
    console.log (person.hzzz);
var person = {
    name:  'Somebody'
};
    console.log( person.hzz === undefined);
    console.log( person.name === undefined);*/
var obj = {};
obj.test = undefined;
console.log( "test" in obj);
console.log( "blabla" in obj);

var person = {};
person['любимое блюдо вечером'] = 'котлетки';
console.log(person);
var person2 = { 
    favoriteDish: 'котлетки',
    name : 'Dasha',
    isLovely: true, 
};
console.log(person2);

var person = {
    name: "Leo",
    age: 29,
    with: {
        nutes: 23,
        milk: 1,
        water: 0
    }
}

console.log(person.name);
console.log(person.with.nutes);

var list = {
    width: 200,
    height: 100,
    title: 'List'
};

for ( var PrName in list) {
    console.log( "ключ: " + PrName + " значение: " + list[PrName] );
}

var Slist = {
    size: '12Px',
    position: 2,
    blabla: 1,
};

var counter = 0;
for (var key in Slist) {
    counter++;
}
console.log("Всего блабла: " + counter);
  
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var schedule = {};


console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";
console.log(isEmpty(schedule)); // false