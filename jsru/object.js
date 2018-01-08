var person = {}; //создаем пустой обьект
    person.name = 'Зинаида'; //присвоили свойство  
    person.gender = 'female';
//delete person.gender; // удалили свойство(осталось имя)
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